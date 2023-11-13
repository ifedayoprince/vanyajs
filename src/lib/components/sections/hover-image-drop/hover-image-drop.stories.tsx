import React from 'react'
import { HoverImageDrop } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof HoverImageDrop> = {
  title: 'Hover Image Drop',
  component: HoverImageDrop,
}
export default meta

type Story = StoryObj<typeof HoverImageDrop>

export const Primary: Story = {
  args: {
    links: [
      'https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
      'https://images.unsplash.com/photo-1699771808058-ee8aa12b1399?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
      'https://images.unsplash.com/photo-1682687220247-9f786e34d472?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
      'https://images.unsplash.com/photo-1699393393011-4f6f3e36a5c0?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
      'https://images.unsplash.com/photo-1698584200770-3838c3690a27?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8',
      'https://images.unsplash.com/photo-1694950888587-7dc43b3f30c8?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1699354511301-ec6be76db29f?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1698725224250-afb10355c2c4?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1693234928596-7052022c15a8?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1699147831362-9a875de53ed4?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
}
