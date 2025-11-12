import LayoutContainer from "@/components/platform/LayoutContainer"
import PlatformSection from "@/components/platform/platformCards"
import PlatformFaqSection from "@/components/platform/PlatformFaqSection"
import Prefooter from "@/components/Prefooter"

const Platform = () => {
  return (
      <div className="mx-auto max-w-md md:max-w-5xl">
      <div className="p-4 rounded-lg">
        <LayoutContainer />
      </div>    
      <div className="p-4 rounded-lg">
        <PlatformSection/>
      </div> 
       <div className="">
        <PlatformFaqSection/>
      </div>    
       <div className="">
        <Prefooter/>
      </div>    
    </div>
  )
}

export default Platform