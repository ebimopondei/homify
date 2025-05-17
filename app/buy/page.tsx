import Image from "next/image"
import { Bed, ChevronLeft, ChevronRight, DoorClosed, Info, Key, MapPin, Rotate3D, Shield, Sun, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JSX } from "react"
import FilterForm from "@/components/filter-form"

export default function BuyPage() {

  return (
    <div className="flex flex-col min-h-screen px-6 md:px-16">
      

      {/* Main Banner */}
      {/* <div className="bg-blue-500 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-2xl font-semibold">Homely Buy</h1>
        </div>
      </div> */}

      {/* Filter Section */}
      <FilterForm />
      

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Property Listings */}
            <div className="lg:col-span-3 space-y-6">
              {properties.map( (props, i) => <PropertyCard key={i} {...props} />)}

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

interface propertiesType {
    title: string;
    image: string;
    verified: boolean;
    subtitle: string;
    location: string;
    description: string;
    cost: string;
    company: string;
    createdAt: string;
    specs: {
        bedrooms?: number;
        selfContain?: boolean;
        light?: boolean;
        accessibleRoad?: boolean,
        maxRoommates?: number | null,
        fenced?: boolean,
        gated?: boolean,
        moreInfo?: string,
    };
}

interface specIcons {
    bedrooms: JSX.Element;
    selfContain: JSX.Element;
    light: JSX.Element;
    accessibleRoad: JSX.Element;
    maxRoommates: JSX.Element;
    fenced: JSX.Element;
    gated: JSX.Element;
    moreInfo: JSX.Element;
}

const specIcons = {
  bedrooms: Bed,
  selfContain: DoorClosed, // You might need a more specific icon
  light: Sun,
  accessibleRoad: Rotate3D,
  maxRoommates: Users,
  fenced: Shield,
  gated: Key,
  moreInfo: Info,
};

const properties: propertiesType[] = [
  {
    title: 'Grand Two Bedroom Mansion',
    verified: true,
    subtitle: '2 Bedroom flat',
    image: '/images/property1.png',
    location: 'Lagos, Ikeja',
    description: '2 Bedroom flat, with 3 bathroom in a 102 sqm. All fenced in a good environment with good roads.',
    cost: '45,000,000',
    company: "Jonnuel Housing Int'l",
    createdAt: '13 Sept, 2022',
    specs: {
      bedrooms: 2,
      selfContain: false,
      // light: true,
      // accessibleRoad: true,
      // maxRoommates: null, // or a number if applicable
      // fenced: true,
      // gated: true,
    },
  },
  {
    title: 'Cozy Self-Contain Apartment',
    verified: false,
    subtitle: 'Single Room Self-Contain',
    image: '/images/property2.png',
    location: 'Yenagoa, Opolo',
    description: 'A comfortable self-contain with steady light and a tarred road.',
    cost: '15,000,000',
    company: 'Bayelsa Rentals',
    createdAt: '28 Oct, 2023',
    specs: {
      selfContain: true,
      bedrooms: 1, // Could be 1 for a self-contain
      // light: true,
      // accessibleRoad: true,
      // maxRoommates: 1,
      // fenced: false,
      gated: false,
    },
  },
  {
    title: 'Spacious Three Bedroom House',
    verified: true,
    subtitle: '3 Bedroom Bungalow',
    image: '/images/property3.png',
    location: 'Abuja, Gwarimpa',
    description: 'A large 3 bedroom bungalow in a gated estate.',
    cost: '80,000,000',
    company: 'Prime Properties Ltd.',
    createdAt: '5 Jan, 2024',
    specs: {
      // bedrooms: 3,
      // selfContain: false,
      // light: true,
      accessibleRoad: true,
      maxRoommates: null,
      fenced: true,
      gated: true,
    },
  },
];

function PropertyCard({ verified = false, image = "/placeholder.svg", ...props }:propertiesType) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <h3 className="text-lg font-medium p-4 border-b">{props.title}</h3>
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
          <h4 className="text-blue-600 font-medium">{props.subtitle}</h4>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" /> {props.location}
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
      <div className="bg-gray-100 px-4 py-2 flex items-center gap-8 text-sm">
        {Object.keys(props.specs).map((key) => {
          const value = props.specs[key as keyof typeof props.specs];
          const Icon = specIcons[key as keyof typeof props.specs];

          // Decide how to display based on the value type
          let displayValue = value;
          if (typeof value === 'boolean') {
            displayValue = value ? '' : '';
          } else if (value === null) {
            return null; // Don't display if not applicable
          }

          return (
            <div key={key} className="spec-item flex gap-2 items-center">
              {Icon && <Icon size={14} />}
              <span className="text-xs">{displayValue} {key}</span>
            </div>
          );
        })}

        {/* <div className="flex items-center">
          <span className="w-4 h-4 bg-gray-300 rounded-full mr-2"></span>2 Bedrooms
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 bg-gray-300 rounded-full mr-2"></span>3 Bathrooms
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 bg-gray-300 rounded-full mr-2"></span>4 Car space
        </div> */}
      </div>
    </div>
  )
}
