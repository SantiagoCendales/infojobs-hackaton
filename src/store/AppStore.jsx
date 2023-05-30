import { create } from 'zustand'

export const useUserInfo = create((set) => ({
  userInfo: {},
  aboutUser: '',
  aboutUserImprove: '',
  userExperience: [],
  userEducation: [],
  userSkills: [], 
  userLenguaje: [],
  userCvPdfUrl: localStorage.getItem('pdf_url') || null,
  updateUserInfo: (userInfo) => set(() => ({ userInfo: userInfo })),
  updateAboutUser: (aboutUser) => set(() => ({ aboutUser: aboutUser })),
  updateAboutUserImprove: (aboutUserImprove) => set(() => ({ aboutUserImprove: aboutUserImprove })),
  updateUserExperience: (userExperience) => set(() => ({ userExperience: userExperience })),
  updateUserEducation: (userEducation) => set(() => ({ userEducation: userEducation })),
  updateUserCvPdfUrl: (pafPath) => set(() => ({ userCvPdfUrl: pafPath })),
  updateUserSkills: (skills) => set(() => ({ userSkills: skills })),
  updateUserLenguaje: (lenguaje) => set(() => ({ userLenguaje: lenguaje })),
}))