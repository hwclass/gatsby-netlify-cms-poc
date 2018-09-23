import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import ExamplePagePreview from './preview-templates/ExamplePagePreview';
import AirportServicePagePreview from './preview-templates/AirportServicePagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('example', ExamplePagePreview);
CMS.registerPreviewTemplate('airport-service', AirportServicePagePreview);
