import Image from "next/image"
import { ChevronDown, ChevronLeft, ChevronRight, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      

      {/* Main Banner */}
      {/* <div className="bg-blue-500 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-2xl font-semibold">Homely Buy</h1>
        </div>
      </div> */}

      {/* Filter Section */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
              <span className="text-blue-500 text-sm">🔍</span>
            </div>
            <h2 className="text-gray-700 font-medium">Property Filter</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <Input placeholder="e.g Lagos, Abuja..." className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flat">Flat</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Keyword</label>
              <Input placeholder="e.g hotel or estate" className="w-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="No min" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000000">₦1,000,000</SelectItem>
                  <SelectItem value="5000000">₦5,000,000</SelectItem>
                  <SelectItem value="10000000">₦10,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="No max" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50000000">₦50,000,000</SelectItem>
                  <SelectItem value="100000000">₦100,000,000</SelectItem>
                  <SelectItem value="200000000">₦200,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="No max" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Furnishing</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="No max" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="furnished">Furnished</SelectItem>
                  <SelectItem value="unfurnished">Unfurnished</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Servicing</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="No max" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="serviced">Serviced</SelectItem>
                  <SelectItem value="unserviced">Unserviced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Shared</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="No max" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="No max" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flat">Flat</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Property Listings */}
            <div className="lg:col-span-3 space-y-6">
              <PropertyCard verified={true} image="/images/property1.png" />
              <PropertyCard verified={false} image="/images/property2.png" />
              <PropertyCard verified={false} image="/images/property3.png" />
              <div className="bg-gray-200 h-32 flex items-center justify-center text-gray-400 text-2xl font-light">
                Ads
              </div>
              <PropertyCard verified={false} image="/images/property4.png" />
              <PropertyCard verified={true} image="/images/property5.png" />

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 py-4">
                <button className="px-3 py-1 border rounded text-gray-500 flex items-center">
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </button>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                  <button
                    key={page}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      page === 2 ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-1 border rounded text-gray-500 flex items-center">
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <h3 className="text-blue-600 font-medium mb-4">Available Properties</h3>
                <p className="text-sm text-gray-600 mb-4">Currently Available for Rent in Nigeria</p>

                <div className="grid grid-cols-5 gap-2 mb-2 text-sm font-medium">
                  <div>Type</div>
                  <div>1 bed</div>
                  <div>2 bed</div>
                  <div>3 bed</div>
                  <div>4 bed</div>
                </div>

                <div className="grid grid-cols-5 gap-2 mb-2 text-sm">
                  <div>Flat</div>
                  <div>1,342</div>
                  <div>550</div>
                  <div>1,402</div>
                  <div>4,043</div>
                </div>

                <div className="grid grid-cols-5 gap-2 mb-2 text-sm">
                  <div>Houses</div>
                  <div>405</div>
                  <div>761</div>
                  <div>284</div>
                  <div>842</div>
                </div>

                <div className="border-t my-4"></div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Property Type</span>
                    <span>Available</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Flat</span>
                    <span>1,342</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Houses</span>
                    <span>5,038</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Land</span>
                    <span>1,102</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Event Centre</span>
                    <span>23</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Offices Spaces</span>
                    <span>53</span>
                  </div>
                </div>

                <div className="border-t my-4"></div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">States We Covered</div>
                  <div className="text-sm">Lagos</div>
                  <div className="text-sm">FCT</div>
                  <div className="text-sm">Delta</div>
                  <div className="text-sm">Anambra</div>
                  <div className="text-sm">Rivers</div>
                </div>
              </div>

              <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-400 text-2xl font-light">
                Ads
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/logo-white.svg" alt="Homely Buy Logo" width={40} height={40} />
              </div>
              <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
              <p className="text-sm mb-4">
                Homely is a technology real estate portal to make a difference in the real estate industry. We are the
                most visited real estate website in the United States. We are passionate about empowering people through
                technology to make smarter property decisions. We provide property listings, market data, local
                insights, and neighborhood information to make your property search easier.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-blue-600">
                Learn more
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">ADVERTISE WITH US</h3>
              <ul className="space-y-2 text-sm">
                <li>Advertise | Market Your Property</li>
                <li>Join Us</li>
                <li>Featured Real Estate Companies</li>
                <li>Premium Account</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-4">PRODUCTS</h3>
              <ul className="space-y-2 text-sm">
                <li>Buy Homes</li>
                <li>Rentals</li>
                <li>Short-term Apartments</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-4">LEGAL</h3>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Cookie Preferences</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
              <ul className="space-y-2 text-sm">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-4">USEFUL LINKS</h3>
              <ul className="space-y-2 text-sm">
                <li>Area Guide</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PropertyCard({ verified = false, image = "/placeholder.svg" }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <h3 className="text-lg font-medium p-4 border-b">Grand Two Bedroom Mansion</h3>
      <div className="grid md:grid-cols-2 gap-4 p-4">
        <div className="relative">
          {verified && (
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">Verified</div>
          )}
          <Image
            src={image || "/placeholder.svg"}
            alt="Property"
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded"
          />
        </div>
        <div>
          <h4 className="text-blue-600 font-medium">2 Bedroom flat</h4>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" /> Lagos, Nigeria
          </div>

          <h5 className="font-medium text-sm mt-4 mb-1">Property Description</h5>
          <p className="text-sm text-gray-600 mb-2">
            2 Bedroom flat, with 3 bathroom in a 102 sqm. All fenced in a good environment with good roads.
          </p>
          <a href="#" className="text-blue-500 text-sm">
            More details
          </a>

          <div className="flex items-center text-xs text-gray-500 mt-4">
            <span className="inline-block mr-4">Date added: 15 Sept 2023</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="font-bold">₦ 45,000,000</div>
            <div className="text-sm text-gray-600">Jommal Housing Int.</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-2 grid grid-cols-3 text-sm">
        <div className="flex items-center">
          <span className="w-4 h-4 bg-gray-300 rounded-full mr-2"></span>2 Bedrooms
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 bg-gray-300 rounded-full mr-2"></span>3 Bathrooms
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 bg-gray-300 rounded-full mr-2"></span>4 Car space
        </div>
      </div>
    </div>
  )
}
