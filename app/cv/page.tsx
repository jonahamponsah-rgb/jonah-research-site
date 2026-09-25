import { pageMetadata } from "@/lib/seo";
import { Education } from "@/components/Education";
import { PageIntro } from "@/components/PageIntro";
import { CVDownload } from "@/components/CVDownload";

export const metadata = pageMetadata("CV & Resume", "Academic training and research experience of Jonah Kwesi Amponsah, PhD. Download the current resume in DOCX format.", "/cv");

export default function CVPage() {
  return (
    <>
      <PageIntro eyebrow="Curriculum Vitae" title="Training, scholarship, and research experience." text="Academic training, research interests, and my current resume, available as a Word document." />
      <section className="shell section compact-top cv-grid">
        <article className="cv-block"><p className="card-kicker">Current appointment</p><h2>Statistician III</h2><p>University of Wisconsin–Madison · School of Medicine and Public Health</p></article>
        <Education />
        <article className="cv-block"><p className="card-kicker">Research themes</p><h2>Methods + implementation + health</h2><p>Machine learning, explainability, implementation science, oncology, population health, and spatial methods.</p></article>
        <article className="cv-block"><p className="card-kicker">Resume</p><h2>Curriculum vitae</h2><p>Download the current resume in DOCX format.</p><CVDownload /></article>
      </section>
    </>
  );
}


