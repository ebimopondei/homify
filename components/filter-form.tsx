'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"

import { useMyForm, onSubmit } from "@/app/schema/filterform"


export default function FilterForm(){
  const form = useMyForm()

    return (
        <div className="bg-white py-4 border-b">
          
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="container mx-auto space-y-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
                    <span className="text-blue-500 text-sm">🔍</span>
                  </div>
                  <h2 className="text-gray-700 font-medium">Property Filter</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <FormField
                      control={form.control}
                      name="location"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-gray-700">Location</FormLabel>
                          <FormControl>
                              <Input placeholder="e.g Lagos, Abuja..." className="w-full" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                        )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="category"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-gray-700">Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="flat">Flat</SelectItem>
                                <SelectItem value="house">House</SelectItem>
                                <SelectItem value="land">Land</SelectItem>
                              </SelectContent>
                            </Select>
                          <FormMessage />
                        </FormItem>
                        )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="keyword"
                      render={({field}) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700 ">Keyword</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g hotel or estate" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      )}
                  />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mb-4">
                  <div>
                    <FormField
                      control={form.control}
                      name="min"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-gray-700 mb-1">Min Price</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="No min" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1000000">₦1,000,000</SelectItem>
                                <SelectItem value="5000000">₦5,000,000</SelectItem>
                                <SelectItem value="10000000">₦10,000,000</SelectItem>
                              </SelectContent>
                            </Select>
                          <FormMessage />
                        </FormItem>
                        )}
                    />
                  </div>
                  
                  <div>
                    <FormField
                      control={form.control}
                      name="max"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-gray-700 mb-1">Max Price</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="No max" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="50000000">₦50,000,000</SelectItem>
                                <SelectItem value="100000000">₦100,000,000</SelectItem>
                                <SelectItem value="200000000">₦200,000,000</SelectItem>
                              </SelectContent>
                            </Select>
                          <FormMessage />
                        </FormItem>
                        )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="bedroom"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-gray-700 mb-1">Bedroom</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5+</SelectItem>
                              </SelectContent>
                            </Select>
                          <FormMessage />
                        </FormItem>
                        )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="furnishing"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-gray-700 mb-1">Furnishing</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="furnished">Furnished</SelectItem>
                                <SelectItem value="unfurnished">Unfurnished</SelectItem>
                              </SelectContent>
                            </Select>
                          <FormMessage />
                        </FormItem>
                        )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="servicing"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-gray-700 mb-1">Servicing</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="serviced">Serviced</SelectItem>
                                <SelectItem value="unserviced">Unserviced</SelectItem>
                              </SelectContent>
                            </Select>
                          <FormMessage />
                        </FormItem>
                        )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="shared"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-gray-700 mb-1">Shared</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                              </SelectContent>
                            </Select>
                          <FormMessage />
                        </FormItem>
                        )}
                    />
                  </div>
                  
                </div>
                <div>
                    <Button type="submit">Submit</Button>
                  </div>
              </form>
            </Form>
      
      </div>
    )
}