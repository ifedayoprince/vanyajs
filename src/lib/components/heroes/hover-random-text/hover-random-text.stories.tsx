import { HoverRandomText } from '.'
import { Meta, StoryObj } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof HoverRandomText> = {
  title: 'Hover Random Text',
  component: HoverRandomText,
}
export default meta

type Story = StoryObj<typeof HoverRandomText>

export const Primary: Story = {
  args: {
    gradientRadius: 'S',
  },
}
