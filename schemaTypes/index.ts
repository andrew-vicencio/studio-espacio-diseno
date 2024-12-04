import {postType} from './postType';
import {clientType} from './clientType';
import { productCategoryType } from './productType';
import { productItemType } from './productItemType';
import { projectType } from './projectType';
import { testimonialType } from './testimonial';
import { tagType } from './tags';
import { SiteSettings } from './SiteSettings';

export const schemaTypes = [
    postType,
    clientType,
    productCategoryType,
    productItemType,
    projectType,
    testimonialType,
    tagType,
    SiteSettings
]