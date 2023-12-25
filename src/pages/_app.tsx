import { AppProps } from 'next/app'
import '../app/globals.css'
import { ThemeProvider } from 'next-themes'
import { SliderChartProvider } from "@/contexts/SliderChartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SliderChartProvider>
        <Component  {...pageProps} />
      </SliderChartProvider>

    </ThemeProvider>
  )
}

export default MyApp