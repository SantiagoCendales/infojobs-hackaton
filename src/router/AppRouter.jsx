import { Route, Routes } from "react-router-dom"
import { MainRoutes } from "../main/routes/MainRoutes"
import { LoginPage } from "../auth/pages/LoginPage"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { startLoadingOffers } from "../store/main/thunks"

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingOffers());
  }, [])
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/*" element={<MainRoutes />}></Route>
      </Routes>
    </>
  )
}
