import {blockContent} from './schemaTypes/blockContent'
import {post} from './schemaTypes/post'
import {about} from "./schemaTypes/about"
import {author} from './schemaTypes/author'
import { contact } from './schemaTypes/contact'

export const schema = {
  types: [post, author,contact, about, blockContent],
}
