<template lang="pug">
.card-section
.card(style="height: 280px")
  RouterLink.img(:to='"/Exhibitions/" + _id')
    div.text-h5.text-left.content
      p {{ title }}
      p {{ place }}
      p {{ new Date(from).toLocaleDateString() + '~' + new Date(to).toLocaleDateString() }}
    img(:src="image")

</template>
<script setup>
defineProps({
  _id: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  from: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  },
  place: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: undefined
  },
  images: {
    type: [String],
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  sell: {
    type: Boolean,
    default: false
  },
  map: {
    type: String
  },
  category: {
    type: String,
    default: ''
  }
}
)
</script>
