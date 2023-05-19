import PropTypes from 'prop-types'

const Container = ({children}) => {
  return (
    <div className='max-w-[1280px] mx-auto xl:px-20 sm:px-2 px-4'>
      {children}
    </div>
  )
}

export default Container

Container.propTypes = {
  children: PropTypes.node.isRequired
}