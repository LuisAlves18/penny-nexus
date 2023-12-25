import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
    Component,
    useEffect,
} from "react";


interface SliderChartProps {
    initialAmount: number;
    setInitialAmount: Dispatch<SetStateAction<number>>;
    incrementAmount: number;
    setIncrementAmount: Dispatch<SetStateAction<number>>;
    timeSpan: number;
    setTimeSpan: Dispatch<SetStateAction<number>>;


}

interface SliderChartProviderProps {
    children: ReactNode;
}

export const SliderChartContext = createContext<SliderChartProps>({} as SliderChartProps);

export const SliderChartProvider = ({ children }: SliderChartProviderProps) => {
    const [initialAmount, setInitialAmount] = useState<number>(1);
    const [incrementAmount, setIncrementAmount] = useState<number>(1);
    const [timeSpan, setTimeSpan] = useState<number>(52);

useEffect(() => {
},[initialAmount, setInitialAmount,incrementAmount, setIncrementAmount,timeSpan, setTimeSpan])
    return (
        <SliderChartContext.Provider value={{ initialAmount, setInitialAmount,incrementAmount, setIncrementAmount,timeSpan, setTimeSpan }}>
            {children}
        </SliderChartContext.Provider>
    );
};

export function useSliderChart(): SliderChartProps {
    const context = useContext(SliderChartContext);
    return context;
}
