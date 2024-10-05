import { HashLoader, FadeLoader } from 'react-spinners'
import './ProcessingLoader.css'

const ProcessingLoader = ({ type }: { type: string }) => {
  const renderLoader = () => {
    switch (type) {
      case 'login':
        return (
          <>
            <div className='transaction-loader-text'>Logging in...</div>
            <FadeLoader
              className='bounce-loader'
              color={'#000'}
              loading={true}
            />
          </>
        )
      case 'verify':
        return (
          <>
            <div className='transaction-loader-text'>
              Verification in progress...
            </div>
            <HashLoader
              className='hash-loader'
              color={'#000'}
              loading={true}
              size={50}
            />
          </>
        )
      default:
        return null
    }
  }

  return <div className='transaction-loader'>{renderLoader()}</div>
}

export default ProcessingLoader
