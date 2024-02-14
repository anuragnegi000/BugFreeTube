import { Menu } from 'lucide-react'

import logo from '../assets/logo.svg'

const PageHeader = () => {
  return (
        <>
              <div className='flex gap-10 lg:gap-20 justify-between'>
                    
                    <div className='flex gap-4 items-center  flex-shrink-0'>
                          <button>
                                <Menu/>
                          </button>
                          <a href="https://www.googl.com">
                                <img src={logo } alt="" />
                          </a>
                    </div>
                    <div></div>
                    <div></div>
        </div>
        </>
  )
}

export default PageHeader
