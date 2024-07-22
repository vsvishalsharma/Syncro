'use client'
import React, { useEffect, useRef, useState } from 'react'
import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'

type Props = {
  onUpload: (e: string) => any
}

type UploadedFile = {
  cdnUrl: string
  uuid: string
  name: string
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef = useRef<(typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider) | null>(null)
  const [files, setFiles] = useState<UploadedFile[]>([])

  useEffect(() => {
    const handleUpload = async (e: CustomEvent<LR.EventPayload['file-upload-success']>) => {
      const fileUrl = e.detail.cdnUrl
      const file = await onUpload(fileUrl)
      if (file) {
        router.refresh()
      }
      setFiles((prevFiles) => [...prevFiles, {
        cdnUrl: e.detail.cdnUrl,
        uuid: e.detail.uuid,
        name: e.detail.name
      }])
    }

    const currentCtxProvider = ctxProviderRef.current
    if (currentCtxProvider) {
      currentCtxProvider.addEventListener('file-upload-success', handleUpload as unknown as EventListener)
    }

    return () => {
      if (currentCtxProvider) {
        currentCtxProvider.removeEventListener('file-upload-success', handleUpload as unknown as EventListener)
      }
    }
  }, [onUpload, router])

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="a9428ff5ff90ae7a64eb" />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />

      <div>
        {files.map((file) => (
          <div key={file.uuid}>
            <img src={file.cdnUrl} alt={file.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UploadCareButton
