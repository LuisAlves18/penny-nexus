import Image from 'next/image'
import {RangeSlider} from "@/components/Slider"
import Chart from "@/components/Chart"

import ThemeChanger from '@/components/ThemeProvider'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-row items-center justify-between p-24 bg-bgPrimary">
        <ThemeChanger/>
        <div>
      <div>
        <RangeSlider
        min={0}
        max={10}
        steps={0.25}
        contextValue={"initialAmount"}
        title={"Initial Amount"}/>
      </div>
      <div>
      <RangeSlider
        min={0}
        max={10}
        steps={0.25}
        contextValue={"incrementAmount"}
        title={"Increment Amount"}/>
      </div>
      <div>
      <RangeSlider
        min={1}
        max={52}
        steps={1}
        contextValue={"timeSpan"}
        title={"Time Span"}/>
      </div>
      </div>
      <div>
        <Chart/>
      </div>
    </main>
  )
}
