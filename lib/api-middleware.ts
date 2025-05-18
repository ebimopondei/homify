import { DatabaseError } from "@/utils/DatabaseError"
import { type NextRequest, NextResponse } from "next/server"

// Custom error class for API errors
export class ApiError extends Error {
  statusCode: number

  constructor(message: string, statusCode = 500) {
    super(message)
    this.name = "ApiError"
    this.statusCode = statusCode
  }
}

type RouteHandler = (req: NextRequest, params?: any) => Promise<NextResponse> | NextResponse

export function withErrorHandling(handler: RouteHandler): RouteHandler {
  return async (req, params) => {
    try {
      return await handler(req, params)
    } catch (error) {
      console.error("[API Error]:", error)

      if (error instanceof DatabaseError) {
          return NextResponse.json(
            { 
                error: error.message,  
                details: error instanceof Error ? error.message : String(error), 
                status: error.statusCode,
                success: false
              })
        }

      // Handle known errors
      if (error instanceof ApiError) {
        return NextResponse.json(
          {
            error: error.message,
            success: false,
            status: error.statusCode 
          }
        )
      }

      // Handle unknown errors
      return NextResponse.json(
        {
          error: "An unexpected error occurred",
          status: 500,
          success: false,
          ...(process.env.NODE_ENV !== "production" && {
            details: error instanceof Error ? error.message : String(error),
          }),
        }
      )
    }
  }
}
