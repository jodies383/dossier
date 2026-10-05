import { useEffect, useRef, useState } from 'react'
import { renderAsync } from 'docx-preview'
import cvDocumentUrl from '../../assets/Jodie_Solomons_Professional_CV.docx?url'
import { PageHeading } from '../SectionPrimitives.jsx'

function CvPage() {
  const previewRef = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const preview = previewRef.current
    let isCurrent = true

    async function loadDocument() {
      try {
        const response = await fetch(cvDocumentUrl)
        if (!response.ok) {
          throw new Error('The CV document could not be loaded.')
        }

        const documentData = await response.arrayBuffer()
        await renderAsync(documentData, preview, preview, {
          className: 'cv-document',
          ignoreWidth: true,
          ignoreHeight: true,
          breakPages: true,
        })

        if (isCurrent) {
          setStatus('ready')
        }
      } catch {
        if (isCurrent) {
          setStatus('error')
        }
      }
    }

    loadDocument()

    return () => {
      isCurrent = false
      preview?.replaceChildren()
    }
  }, [])

  return (
    <>
      <PageHeading
        eyebrow="Page 07 / Curriculum vitae"
        title="Jodie Solomons"
        intro="Curriculum vitae"
      />
      <div className="cv-toolbar">
        <span className="cv-file-label">JODIE_SOLOMONS_PROFESSIONAL_CV.DOCX</span>
        <a className="cv-download" href={cvDocumentUrl} download="Jodie_Solomons_Professional_CV.docx">
          Download CV
        </a>
      </div>
      {status === 'loading' && <p className="cv-status" role="status">Preparing CV preview...</p>}
      {status === 'error' && <p className="cv-status" role="alert">The preview could not be loaded. Download the original CV to view it.</p>}
      <div className="cv-preview-viewport" aria-label="CV document preview">
        <div className="cv-preview" ref={previewRef} />
      </div>
    </>
  )
}

export default CvPage