import {
  LuBriefcaseBusiness, LuCircleEqual, LuContact, LuDoorOpen, LuHouse,
  LuMessageSquare, LuSquareCode,
} from 'react-icons/lu'

export const profile = {
  name: 'Tanapat',
  studentId: '6952D10008',
  role: 'Fullstack Web Developer',
}

export const navigation = [
  { path: '/', label: 'Home', icon: LuHouse },
  { path: '/about', label: 'About Me', icon: LuContact },
  { path: '/eduexp', label: 'Education & Experience', icon: LuDoorOpen },
  { path: '/spec', label: 'Specializations', icon: LuCircleEqual },
  { path: '/projects', label: 'Projects', icon: LuBriefcaseBusiness },
  { path: '/skills', label: 'Skills', icon: LuSquareCode },
  { path: '/contactme', label: 'Contact Me', icon: LuMessageSquare },
]

export const sampleBio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem.'
