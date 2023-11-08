import React from 'react'
import { NumberedSlidePanel } from '.'
import { objectValuesToControls } from '../../storybook-utils'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NumberedSlidePanel> = {
  title: 'Numbered Slide Panel',
  component: NumberedSlidePanel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}
export default meta

const Template: StoryFn = () => <NumberedSlidePanel />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  onClick: () => alert('clicking primary'),
}
