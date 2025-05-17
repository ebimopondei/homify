
'use client'
import Features from "@/components/feature";
import { Button } from "@/components/ui/button";
import Navigate from "@/sections/navigate";
import OurStory from "@/sections/our-story";
import Partners from "@/sections/partners";

export default function Home() {




  return (
    <div className='p-4 text-black md:bg-[url("/images/new-hero-landing.png")] h-[89dvh] bg-[center_-450px] bg-no-repeat md:bg-cover md:bg-center '>
        <div className=" flex items-center justify-center">
          <div className="text-center mt-30">
            <h1 className="text-3xl font-bold mb-2">Discover a place you will love to live.</h1>
            <p>Connect with more than 75million looking for new homes using our comorehensive market platform</p>
            <Button className="mb-20 mt-10 bg-blue-2000 py-6 px-10">Get Started</Button>

            <div className="rounded-xl overflow-hidden mt-4 bg-blue-6000 grid grid-cols-3 text-center items-center">
              <div className="px-2 text-white py-4 bg-blue-2000">Buy</div>
              <div  className="px-2 py-4">Rent</div>
              <div className="px-2 py-4 ">Share Rent</div>
            </div>

            <Features />
            <Partners />
            <Navigate />
            <OurStory />

            {/* <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="container mx-auto space-y-8 bg-white">
                  <div className='flex gap-3 w-full items-center md:flex-row flex-wrap relative  rounded-2xl py-3 bg-blue-1000 text-xs md:w-[550px] text-center'>
                    <div className='basis-fulls text-center basis-3/12 grow '>
                        <div className='flex m-auto gap-1 items-center justify-between border-r border-solid border-black'>
                            <LocateFixedIcon className="hidden" width={50} />
                            <FormField
                              control={form.control}
                              name="location"
                              render={({field}) => (
                                <FormItem>
                                  <FormControl>
                                      <Input placeholder="e.g Lagos, Abuja..." className="pl-1 pr-2  bg-transparent border-none outline-none w-full" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                                )}
                            />
                            
                        </div>
                    </div>

                    <div className='basis-fulls block  basis-3/12 grow'>
                        <div className='flex items-center gap-1 border-r border-solid border-black'>
                        <Users   width={50}/>
                        <FormField
                              control={form.control}
                              name="location"
                              render={({field}) => (
                                <FormItem>
                                  <FormControl>
                                      <Input placeholder="e.g Lagos, Abuja..." className="bg-transparent border-none outline-none w-full" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                                )}
                            />
                            </div>
                    </div>

                    <div className='basis-fulls block  basis-3/12 grow'>
                        <div className='flex gap-1'>
                        <img src="/images/icons/Real Estate.png" />
                        <select name='propertyType' className='outline-none border-none '>
                            <option defaultValue="true">Property Type</option>
                            <option >Bungalo</option>
                            <option>Duplex</option>
                        </select>
                        </div>
                    </div>

                    <div className='basis-full'>
                        <button className='bg-[#3189FA] rounded-full p-1'>
                        <img src="/images/icons/Search.png" />
                        </button>
                    </div>
                </div>

              </form>

            </Form> */}

          </div>
        </div>
    </div> 
  );
}
