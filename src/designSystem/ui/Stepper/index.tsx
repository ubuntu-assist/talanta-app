import { useEffect, useRef, useState } from 'react'
import './style.css'

// Define the structure of each step in the stepsConfig
interface StepConfig {
  name: string
  Component: React.ComponentType
}

// Define the props for the CheckoutStepper component
interface CheckoutStepperProps {
  stepsConfig: StepConfig[]
}

const CheckoutStepper: React.FC<CheckoutStepperProps> = ({
  stepsConfig = [],
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [margins, setMargins] = useState<{
    marginLeft: number
    marginRight: number
  }>({
    marginLeft: 0,
    marginRight: 0,
  })

  // Type for stepRef should include HTMLDivElement or null
  const stepRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const firstStep = stepRef.current[0]
    const lastStep = stepRef.current[stepsConfig.length - 1]

    if (firstStep && lastStep) {
      setMargins({
        marginLeft: firstStep.offsetWidth / 2 || 0,
        marginRight: lastStep.offsetWidth / 2 || 0,
      })
    }
  }, [stepsConfig.length])

  if (!stepsConfig.length) {
    return <></>
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true)
        return prevStep
      } else {
        return prevStep + 1
      }
    })
  }

  const calculateProgressBarWidth = () => {
    if (stepsConfig.length === 1) return 100
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100
  }

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component

  return (
    <>
      <div className='stepper'>
        {stepsConfig.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className={`step ${
              currentStep > index + 1 || isComplete ? 'complete' : ''
            } ${currentStep === index + 1 ? 'active' : ''}`}
          >
            <div className='step-number'>
              {currentStep > index + 1 || isComplete ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div className='step-name'>{step.name}</div>
          </div>
        ))}

        <div
          className='progress-bar'
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className='progress'
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      {ActiveComponent && <ActiveComponent />}

      {!isComplete && (
        <button
          className='text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800'
          onClick={handleNext}
        >
          {currentStep === stepsConfig.length ? 'Finish' : 'Next'}
        </button>
      )}
    </>
  )
}

export default CheckoutStepper
