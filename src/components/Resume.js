import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { resumeData } from '../constants/resumeData';

const Resume = () => {
  const resumeRef = useRef(null);

  const downloadResume = () => {
  const element = resumeRef.current;
  if (!element) return;

  // ① ชั่วคราวให้ element แสดงผลจริง
  element.style.position = 'fixed';
  element.style.left = '0';
  element.style.top = '0';
  element.style.opacity = '0';
  element.style.zIndex = '-1';

  setTimeout(() => {
    const options = {
      margin: 0,
      filename: `${resumeData.personal.firstName}_${resumeData.personal.lastName}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,   // ② เพิ่มตรงนี้
        logging: false,
        windowWidth: 794,   // ③ A4 width in px
      },
      jsPDF: { format: 'a4', orientation: 'portrait' },
    };

    html2pdf()
      .set(options)
      .from(element)
      .save()
      .then(() => {
        // ④ คืนค่า hidden กลับ
        element.style.position = 'absolute';
        element.style.left = '-99999px';
        element.style.opacity = '1';
        element.style.zIndex = 'auto';
      });
  }, 300); // รอ 300ms ให้ render เสร็จ
};

  const { personal, summary, skills, experience, projects, education } = resumeData;

  // ─── Shared style tokens ───
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

      {/* Download Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
        <button
          id="download-resume-btn"
          onClick={downloadResume}
          style={{
            width: '100%',
            maxWidth: '320px',
            padding: '12px 20px',
            background: 'linear-gradient(90deg, #22c55e, #16a34a)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontSize: '12px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: '"Georgia", serif',
            boxShadow: '0 8px 20px rgba(22, 163, 74, 0.25)',
          }}
        >
          ⬇️ Download PDF Resume
        </button>
      </div>
      <p style={{ textAlign: 'center', color: '#2d3748', fontSize: '12px', margin: '0 0 8px 0' }}>
        Resume preview is hidden. Click the button to download directly.
      </p>

      {/* Hidden resume template for PDF generation */}
      <div
        ref={resumeRef}
        style={{
          position: 'absolute',
          left: '-99999px',
          top: 0,
          width: '210mm',
          height: '297mm',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'row',
          fontFamily: '"Georgia", serif',
          fontSize: '11px',
          lineHeight: '1.65',
          color: '#2c3e50',
          overflow: 'hidden',
        }}
      >

        {/* ════ LEFT SIDEBAR ════ */}
        <div style={{
          backgroundColor: '#2d3748',
          color: '#fff',
          width: '37%',
          padding: '32px 22px',
          display: 'flex',
          flexDirection: 'column',
        }}>

          {/* Photo + Name */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '18px' }}>
            {personal.profileImage && (
              <div style={{
                width: '118px',
                height: '118px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(255,255,255,0.3)',
                marginBottom: '14px',
                flexShrink: 0,
              }}>
                <img
                  src={personal.profileImage}
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
            <h1 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              margin: '0 0 5px 0',
              lineHeight: '1.3',
            }}>
              {personal.firstName}<br />{personal.lastName}
            </h1>
            <p style={{
              fontSize: '8.5px',
              color: '#90cdf4',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: 0,
            }}>
              {personal.title}
            </p>
          </div>

          <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '2px' }} />

          {/* Contact */}
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
                  <p style={{ fontSize: '12px', color: '#90cdf4', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>{item.label}</p>
                  <p style={{ fontSize: '12px', color: '#e2e8f0', margin: 0 }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <p style={SL}>TECHNICAL & SUPPORT SKILLS</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {skills.technical.map((skill, i) => (
              <div key={i}>
                <p style={{ fontSize: '12px', color: '#e2e8f0', margin: '0 0 3px 0' }}>{skill}</p>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                  <div style={{
                    height: '100%',
                    borderRadius: '2px',
                    backgroundColor: '#68d391',
                    width: `${72 + (i % 4) * 6}%`,
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <p style={SL}>Tools</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {skills.tools.map((tool, i) => (
              <span key={i} style={{
                fontSize: '12px',
                color: '#e2e8f0',
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '3px 9px',
                borderRadius: '10px',
                letterSpacing: '0.3px',
              }}>
                {tool}
              </span>
            ))}
          </div>

          {/* Soft Skills */}
          <p style={SL}>Soft Skills</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {skills.soft.map((skill, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#68d391', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: '#e2e8f0' }}>{skill}</span>
              </div>
            ))}
          </div>

        </div>

        {/* ════ RIGHT MAIN ════ */}
        <div style={{
          backgroundColor: '#f0f4f8',
          width: '63%',
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
        }}>

          {/* Profile */}
          <h2 style={{ ...SM, marginTop: 0 }}>Profile</h2>
          <p style={{ fontSize: '12px', color: '#4a5568', margin: 0, lineHeight: '1.75' }}>
            {summary}
          </p>

          {/* Work Experience */}
          <h2 style={SM}>Work Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {experience.map((exp, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: '#2d3748', margin: 0 }}>
                    {exp.company}.
                  </p>
                  <span style={{ fontSize: '12px', color: '#718096', fontStyle: 'italic', flexShrink: 0, marginLeft: '8px' }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{ fontSize: '12px', fontStyle: 'italic', color: '#38a169', margin: '1px 0 5px', fontWeight: '600' }}>
                  {exp.position}.
                </p>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{ fontSize: '12px', color: '#4a5568', paddingLeft: '14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, fontWeight: '700', color: '#2d3748' }}>▪</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <h2 style={SM}>Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {projects.map((project, i) => (
              <div key={i}>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#2d3748', margin: '0 0 1px 0' }}>
                  {project.title}
                </p>
                <p style={{ fontSize: '12px', fontStyle: 'italic', color: '#38a169', margin: '0 0 3px 0', fontWeight: '600' }}>
                  {project.tech}
                </p>
                <p style={{ fontSize: '12px', color: '#4a5568', margin: '0 0 4px 0' }}>
                  {project.description}
                </p>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {project.achievements.map((ach, j) => (
                    <li key={j} style={{ fontSize: '12px', color: '#718096', paddingLeft: '14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, fontWeight: '700', color: '#2d3748' }}>▪</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <h2 style={SM}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {education.map((edu, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: '#2d3748', margin: 0 }}>
                    {edu.school}.
                  </p>
                  <span style={{ fontSize: '12px', color: '#718096', fontStyle: 'italic', flexShrink: 0, marginLeft: '8px' }}>
                    {edu.year}
                  </span>
                </div>
                <p style={{ fontSize: '12px', fontStyle: 'italic', color: '#38a169', margin: '2px 0', fontWeight: '600' }}>
                  {edu.degree}.
                </p>
                {edu.gpa && (
                  <p style={{ fontSize: '12px', color: '#718096', margin: 0 }}>
                    GPA: {edu.gpa}
                  </p>
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
