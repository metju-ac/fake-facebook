export interface Profile {
  name: string
  bio?: string
  coverImage: string
  profileImage: string
  joinedDate: string
  followers?: number
}

export interface Intro {
  job?: { title: string; company: string }
  education?: string[]
  livesIn?: string
  from?: string
  relationship?: string
}

export type Post =
  | {
      type: 'text'
      id: string
      date: string
      text: string
      likes?: number
      comments?: number
    }
  | {
      type: 'photo'
      id: string
      date: string
      text?: string
      image: string
      likes?: number
      comments?: number
    }
  | {
      type: 'checkin'
      id: string
      date: string
      text?: string
      place: string
      image?: string
      likes?: number
      comments?: number
    }
  | {
      type: 'life-event'
      id: string
      date: string
      event: string
      description?: string
      image?: string
    }

export interface WorkEntry {
  title: string
  company: string
  from: string
  to?: string
  description?: string
}

export interface EducationEntry {
  school: string
  field?: string
  from: string
  to?: string
}

export interface PlaceEntry {
  city: string
  type: 'current' | 'hometown' | 'past'
}

export interface ContactInfo {
  email?: string
  phone?: string
  websites?: string[]
  languages?: string[]
  birthday?: string
}

export interface LifeEvent {
  date: string
  title: string
  description?: string
  image?: string
}

export interface About {
  overview?: string
  workHistory: WorkEntry[]
  education: EducationEntry[]
  placesLived: PlaceEntry[]
  contact?: ContactInfo
  lifeEvents: LifeEvent[]
}

export interface Friend {
  name: string
  photo: string
  mutualCount?: number
}

export interface Photo {
  src: string
  caption?: string
  location?: string
  date?: string
}

export interface ProfileConfig {
  profile: Profile
  intro: Intro
  posts: Post[]
  about: About
  friends: Friend[]
  photos: Photo[]
}
