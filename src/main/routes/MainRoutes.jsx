import { Navigate, Route, Routes } from 'react-router-dom'
import { CvPage } from '../pages/CvPage'
import Header from '../../components/header/Header'

export const MainRoutes = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<CvPage></CvPage>}></Route>

        {/* <Route path='offers' element={<OffersPage></OffersPage>}></Route> */}

        <Route path='/' element={<Navigate to="cv" />}></Route>
      </Routes>
    </>
  )
}
