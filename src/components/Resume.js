import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { resumeData } from '../constants/resumeData';

const hiddenTemplateStyle = {
  position: 'fixed',
  left: '0',
  top: '0',
  width: '210mm',
  minHeight: '297mm',
  display: 'flex',
  flexDirection: 'row',
  visibility: 'hidden',
  opacity: '0',
  zIndex: '-1',
  pointerEvents: 'none',
  backgroundColor: '#fff',
  fontFamily: '"Georgia", serif',
  fontSize: '11px',
  lineHeight: '1.65',
  color: '#2c3e50',
  overflow: 'hidden',
};

const captureTemplateStyle = {
  ...hiddenTemplateStyle,
  visibility: 'visible',
  opacity: '1',
  zIndex: '9999',
};

const waitForNextPaint = () =>
  new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });

const waitForImages = (element) => {
  const images = element.querySelectorAll('img');
  return Promise.all(
    Array.from(images).map(
      (img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            })
    )
  );
};

const Resume = () => {
  const resumeRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  const downloadResume = async () => {
    const element = resumeRef.current;
    if (!element || isGenerating) return;

    setIsGenerating(true);
    setIsCapturing(true);

    try {
      await waitForNextPaint();
      await waitForImages(element);
      await waitForNextPaint();

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        scrollX: 0,
        scrollY: 0,
        backgroundColor: '#ffffff',
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

      let heightLeft = imgHeight - pageHeight;
      let position = -pageHeight;

      while (heightLeft > 0) {
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;
      }

      pdf.save(`${resumeData.personal.firstName}_${resumeData.personal.lastName}_Resume.pdf`);
    } catch (error) {
      console.error('Failed to generate resume PDF:', error);
    } finally {
      setIsCapturing(false);
      setIsGenerating(false);
    }
  };

  const { personal, summary, skills, experience, projects, education } = resumeData;

  const SL = {
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '1.8px',
    textTransform: 'uppercase',
    color: '#90cdf4',
    margin: '20px 0 9px 0',
    paddingBottom: '4px',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
  };

  const SM = {
    fontSize: '15px',
    fontWeight: '700',
    letterSpacing: '1.8px',
    textTransform: 'uppercase',
    color: '#2d3748',
    margin: '18px 0 10px 0',
    paddingBottom: '5px',
    borderBottom: '2px solid #2d3748',
  };

  return (
    <section style={{ padding: '24px 16px', backgroundColor: '#cbd5e0' }}>
      {isGenerating && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(45, 55, 72, 0.45)',
            color: '#fff',
            fontFamily: '"Georgia", serif',
            fontSize: '14px',
            letterSpacing: '0.5px',
          }}
        >
          Generating PDF...
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
        <button
          id="download-resume-btn"
          onClick={downloadResume}
          disabled={isGenerating}
          style={{
            width: '100%',
            maxWidth: '320px',
            padding: '12px 20px',
            background: isGenerating
              ? '#94a3b8'
              : 'linear-gradient(90deg, #22c55e, #16a34a)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontSize: '12px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: isGenerating ? 'wait' : 'pointer',
            fontFamily: '"Georgia", serif',
            boxShadow: '0 8px 20px rgba(22, 163, 74, 0.25)',
          }}
        >
          {isGenerating ? 'Generating...' : '⬇️ Download PDF Resume'}
        </button>
      </div>

      <p style={{ textAlign: 'center', color: '#2d3748', fontSize: '12px', margin: '0 0 8px 0' }}>
        Resume preview is hidden. Click the button to download directly.
      </p>

      <div
        ref={resumeRef}
        data-resume-pdf
        style={isCapturing ? captureTemplateStyle : hiddenTemplateStyle}
        aria-hidden={!isCapturing}
      >
        <div
          style={{
            backgroundColor: '#2d3748',
            color: '#fff',
            width: '37%',
            padding: '32px 22px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '18px' }}>
            {personal.profileImage && (
              <div
                style={{
                  width: '118px',
                  height: '118px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid rgba(255,255,255,0.3)',
                  marginBottom: '14px',
                  flexShrink: 0,
                }}
              >
                <img
                  src={personal.profileImage}
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
            <h1
              style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#fff',
                textAlign: 'center',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                margin: '0 0 5px 0',
                lineHeight: '1.3',
              }}
            >
              {personal.firstName}
              <br />
              {personal.lastName}
            </h1>
            {personal.title && (
              <p
                style={{
                  fontSize: '8.5px',
                  color: '#90cdf4',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  margin: 0,
                }}
              >
                {personal.title}
              </p>
            )}
          </div>

          <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '2px' }} />

          <p style={SL}>Contact</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {[
              { icon: '📱', label: 'Phone', value: personal.phone },
              { icon: '✉️', label: 'Email', value: personal.email },
              { icon: '📍', label: 'Location', value: personal.location },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#90cdf4',
                      margin: 0,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: '12px', color: '#e2e8f0', margin: 0 }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={SL}>TECHNICAL & SUPPORT SKILLS</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {skills.technical.map((skill, i) => (
              <div key={i}>
                <p style={{ fontSize: '12px', color: '#e2e8f0', margin: '0 0 3px 0' }}>{skill}</p>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                  <div
                    style={{
                      height: '100%',
                      borderRadius: '2px',
                      backgroundColor: '#68d391',
                      width: `${72 + (i % 4) * 6}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p style={SL}>Tools</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {skills.tools.map((tool, i) => (
              <span
                key={i}
                style={{
                  fontSize: '12px',
                  color: '#e2e8f0',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '3px 9px',
                  borderRadius: '10px',
                  letterSpacing: '0.3px',
                }}
              >
                {tool}
              </span>
            ))}
          </div>

          <p style={SL}>Soft Skills</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {skills.soft.map((skill, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: '#68d391',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '12px', color: '#e2e8f0' }}>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#f0f4f8',
            width: '63%',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'hidden',
          }}
        >
          <h2 style={{ ...SM, marginTop: 0 }}>Profile</h2>
          <p style={{ fontSize: '12px', color: '#4a5568', margin: 0, lineHeight: '1.75' }}>{summary}</p>

          <h2 style={SM}>Work Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {experience.map((exp, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: '#2d3748', margin: 0 }}>
                    {exp.company}.
                  </p>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#718096',
                      fontStyle: 'italic',
                      flexShrink: 0,
                      marginLeft: '8px',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    fontStyle: 'italic',
                    color: '#38a169',
                    margin: '1px 0 5px',
                    fontWeight: '600',
                  }}
                >
                  {exp.position}.
                </p>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3px',
                  }}
                >
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: '12px',
                        color: '#4a5568',
                        paddingLeft: '14px',
                        position: 'relative',
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0, fontWeight: '700', color: '#2d3748' }}>▪</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 style={SM}>Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {projects.map((project, i) => (
              <div key={i}>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#2d3748', margin: '0 0 1px 0' }}>
                  {project.title}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    fontStyle: 'italic',
                    color: '#38a169',
                    margin: '0 0 3px 0',
                    fontWeight: '600',
                  }}
                >
                  {project.tech}
                </p>
                <p style={{ fontSize: '12px', color: '#4a5568', margin: '0 0 4px 0' }}>{project.description}</p>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  {project.achievements.map((ach, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: '12px',
                        color: '#718096',
                        paddingLeft: '14px',
                        position: 'relative',
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0, fontWeight: '700', color: '#2d3748' }}>▪</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 style={SM}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {education.map((edu, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: '#2d3748', margin: 0 }}>
                    {edu.school}.
                  </p>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#718096',
                      fontStyle: 'italic',
                      flexShrink: 0,
                      marginLeft: '8px',
                    }}
                  >
                    {edu.year}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    fontStyle: 'italic',
                    color: '#38a169',
                    margin: '2px 0',
                    fontWeight: '600',
                  }}
                >
                  {edu.degree}.
                </p>
                {edu.gpa && (
                  <p style={{ fontSize: '12px', color: '#718096', margin: 0 }}>GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
