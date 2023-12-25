import React, { useContext, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import Slider from 'react-input-slider';
import { useSliderChart } from "@/contexts/SliderChartContext";

type Props = {
  min: number;
  max: number;
  steps: number;
  title: string;
  contextValue: "initialAmount" | "incrementAmount" | "timeSpan";
};

export const RangeSlider = ({ min, max, steps, title, contextValue }: Props) => {
  const { initialAmount, setInitialAmount, incrementAmount, setIncrementAmount, timeSpan, setTimeSpan } = useSliderChart();

  const getValueFromContext = () => {
    switch (contextValue) {
      case "initialAmount":
        return initialAmount;
      case "incrementAmount":
        return incrementAmount;
      case "timeSpan":
        return timeSpan;
      default:
        return 0;
    }
  };

  const setValueToContext = (value: number) => {
    switch (contextValue) {
      case "initialAmount":
        setInitialAmount(value);
        break;
      case "incrementAmount":
        setIncrementAmount(value);
        break;
      case "timeSpan":
        setTimeSpan(value);
        break;
      default:
        break;
    }
  };

  const [sliderValue, setSliderValue] = React.useState(getValueFromContext());

  useEffect(() => {
    // Update context values when local state changes
    setValueToContext(sliderValue);
  }, [sliderValue]);

  return (
    <>
      <div className="text-txtPrimary">
        <span>{title} :</span>
        <span>
          <DebounceInput
            type="number"
            className="txtPrimary bg-transparent w-10"
            minLength={min}
            max={max}
            value={sliderValue}
            debounceTimeout={300}
            onChange={(event: any) => setSliderValue(event.target.value as number)}
          />
        </span>
      </div>

      <div>
        <Slider
          axis="x"
          xstep={steps}
          xmin={min}
          xmax={max}
          x={sliderValue}
          onChange={(x) => setSliderValue(x.x)}
        />
      </div>
    </>
  );
};
