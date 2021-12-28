import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _FullWidth = () => <MyComponent slice={{"variation":"fullWidth","name":"Full Width","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"}},"id":"_FullWidth"}} />
_FullWidth.storyName = 'Full Width'

export const _WithCaption = () => <MyComponent slice={{"variation":"withCaption","name":"With Caption","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nisi do sunt id commodo culpa dolore. Ut ipsum id minim dolor non et et in anim aute duis enim ipsum est non. Anim sit veniam sunt nulla ipsum aliqua ullamco ullamco sunt proident exercitation ipsum pariatur.","spans":[]}]},"id":"_WithCaption"}} />
_WithCaption.storyName = 'With Caption'
