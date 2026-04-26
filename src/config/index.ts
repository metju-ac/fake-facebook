import type { ProfileConfig } from '../types'
import { profile } from './profile'
import { intro } from './intro'
import { posts } from './posts'
import { about } from './about'
import { friends } from './friends'
import { photos } from './photos'

export const config: ProfileConfig = {
  profile,
  intro,
  posts,
  about,
  friends,
  photos,
}
