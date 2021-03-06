import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _FullWidth = () => <MyComponent slice={{"variation":"fullWidth","name":"Full Width","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"}},"id":"_FullWidth"}} />
_FullWidth.storyName = 'Full Width'

export const _WithCaption = () => <MyComponent slice={{"variation":"withCaption","name":"With Caption","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ad elit irure id velit veniam eiusmod eiusmod fugiat. Ad ipsum anim aliquip dolore cupidatat. Nisi ex eu ipsum irure pariatur aliquip est.","spans":[]}]},"id":"_WithCaption"}} />
_WithCaption.storyName = 'With Caption'
