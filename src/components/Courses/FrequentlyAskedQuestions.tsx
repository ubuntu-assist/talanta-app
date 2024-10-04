import VerticalAccordion from '../../designSystem/ui/VerticalAccordion'

const FrequentlyAskedQuestions = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <div className='flex flex-col'>
        <div className='py-6 space-y-4 md:space-y-6 text-center'>
          <div className=''>
            <p className='text-cyan-500 font-semibold mb-3 text-sm md:text-lg'>
              Questions
            </p>
            <h2 className='text-xl md:text-4xl text-gray-900 font-semibold mb-3'>
              Questions & Answers
            </h2>
          </div>
        </div>

        <VerticalAccordion />
      </div>
    </div>
  )
}
export default FrequentlyAskedQuestions
