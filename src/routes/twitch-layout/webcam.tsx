import { Webcam } from '@/pages/webcam'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/twitch-layout/webcam')({
  component: Webcam,
})
