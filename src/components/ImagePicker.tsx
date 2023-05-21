'use client'

import { ChangeEvent, useState, useRef } from 'react'

export function ImagePicker() {
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  function onImageSelected(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setPreview(reader.result as string)
      }

      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  return (
    <>
      <input
        ref={fileInputRef}
        name="coverUrl"
        type="file"
        id="midia"
        accept="image/*, video/*"
        className="invisible h-0 w-0"
        onChange={onImageSelected}
      />

      {preview && (
        <>
          {preview.startsWith('data:image') && (
            // eslint-disable-next-line
            <img
              src={preview}
              alt=""
              className="aspect-video w-full rounded-lg object-cover"
            />
          )}

          {preview.startsWith('data:video') && (
            <video
              src={preview}
              className="aspect-video w-full rounded-lg"
              controls
              ref={videoRef}
            />
          )}
        </>
      )}
    </>
  )
}
