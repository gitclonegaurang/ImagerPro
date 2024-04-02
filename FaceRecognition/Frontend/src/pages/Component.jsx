// import React from "react";
// import styles from "./Component.module.css"; // Import your CSS module

// export default function Component() {
//   return (
//     <div className={styles.app}>
//       <header className={styles.header}>
//         <a className={styles.logo} href="#">
//           <img
//             alt="Mountain"
//             className={styles["logo-icon"]}
//             src="/images/logo.jpg"
//           />
//           <span className={styles["logo-text"]}>ImagePro</span>
//         </a>
//         <nav className={styles.nav}>
//           <a className={styles["nav-link"]} href="#">
//             Home
//           </a>
//           <a className={styles["nav-link"]} href="#">
//             Features
//           </a>
//           <a className={styles["nav-link"]} href="#">
//             Pricing
//           </a>
//           <a className={styles["nav-link"]} href="#">
//             About
//           </a>
//         </nav>
//       </header>
//       <main className={styles.main}>
//         <section className={`${styles.section} ${styles["section-1"]}`}>
//           <div className={styles.container}>
//             <div className={styles["text-center"]}>
//               <h1 className={styles.title}>Welcome to ImagePro</h1>
//               <p className={styles.subtitle}>
//                 Your one-stop solution for image processing. Enhance your images
//                 with our advanced machine learning algorithms.
//               </p>
//               <a className={styles["cta-link"]} href="#">
//                 Get Started
//               </a>
//               <a className={styles["cta-link"]} href="#">
//                 Learn more
//               </a>
//             </div>
//           </div>
//         </section>
//         <section className={`${styles.section} ${styles["section-2"]}`}>
//           <div className={styles.container}>
//             <h2 className={styles.title}>Our Main Features</h2>
//             <div className={styles["feature-grid"]}>
//               <div className={styles["feature-card"]}>
//                 <h3 className={styles["feature-title"]}>
//                   Low to High Resolution
//                 </h3>
//                 <p className={styles["feature-description"]}>
//                   Transform your low-resolution images into high-resolution
//                   masterpieces with our advanced machine learning algorithms.
//                 </p>
//               </div>
//               <div className={styles["feature-card"]}>
//                 <h3 className={styles["feature-title"]}>
//                   Image Classification
//                 </h3>
//                 <p className={styles["feature-description"]}>
//                   Our AI can classify your images into various categories,
//                   making it easier for you to organize and manage your image
//                   library.
//                 </p>
//               </div>
//               <div className={styles["feature-card"]}>
//                 <h3 className={styles["feature-title"]}>Filters and Editing</h3>
//                 <p className={styles["feature-description"]}>
//                   Add the final touches to your images with our wide range of
//                   filters and editing tools, all powered by machine learning.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import styles from "./Component.module.css"; // Import your CSS module

// export default function Component() {
//   return (
//     <div className={styles.app}>
//       <header className={styles.header}>
//         <a className={styles.logo} href="#">
//           <img
//             alt="Mountain"
//             className={styles["logo-icon"]}
//             src="/images/logo.jpg"
//           />
//           <span className={styles["logo-text"]}>ImagePro</span>
//         </a>
//         <nav className={styles.nav}>
//           <a className={styles["nav-link"]} href="#">
//             Home
//           </a>
//           <a className={styles["nav-link"]} href="#">
//             Features
//           </a>
//           <a className={styles["nav-link"]} href="#">
//             Pricing
//           </a>
//           <a className={styles["nav-link"]} href="#">
//             About
//           </a>
//         </nav>
//       </header>
//       <main className={styles.main}>
//         <section className={`${styles.section} ${styles["section-1"]}`}>
//           <div className={styles.container}>
//             <div className={styles["text-center"]}>
//               <h1 className={styles.title}>Welcome to ImagePro</h1>
//               <p className={styles.subtitle}>
//                 Your one-stop solution for image processing. Enhance your images
//                 with our advanced machine learning algorithms.
//               </p>
//               <a className={styles["cta-link"]} href="#">
//                 Get Started
//               </a>
//               <a className={styles["cta-link"]} href="#">
//                 Learn more
//               </a>
//             </div>
//           </div>
//         </section>
//         <section className={`${styles.section} ${styles["section-2"]}`}>
//           <div className={styles.container}>
//             <h2 className={styles.title}>Our Main Features</h2>
//             <div className={styles["feature-grid"]}>
//               <FeatureCard
//                 title="Low to High Resolution"
//                 description="Transform your low-resolution images into high-resolution masterpieces with our advanced machine learning algorithms."
//                 imageSrc="/images/lowhighres.jpg"
//               />
//               <FeatureCard
//                 title="Image Classification"
//                 description="Our AI can classify your images into various categories, making it easier for you to organize and manage your image library."
//                 imageSrc="/images/lowhighres.jpg"
//               />
//               <FeatureCard
//                 title="Filters and Editing"
//                 description="Add the final touches to your images with our wide range of filters and editing tools, all powered by machine learning."
//                 imageSrc="/images/lowhighres.jpg"
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function FeatureCard({ title, description, imageSrc }) {
//   return (
//     <div className={styles["feature-card"]}>
//       <div className={styles["feature-content"]}>
//         <img src={imageSrc} alt={title} className={styles["feature-image"]} />
//         <div>
//           <h3 className={styles["feature-title"]}>{title}</h3>
//           <p className={styles["feature-description"]}>{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import styles from "./Component.module.css"; // Import your CSS module
export default function Component() {
  return (
    <div className="bg-zinc-400 z-0 h-full w-screen pb-80" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>        

      <div className={styles.app}>
        <header className="sticky top-0 text-xl z-50 flex justify-between p-8 items-center bg-transparent bg-gray-800 text-white p-4">
            <a href="http://localhost:5173/" className="flex items-center text-white font-bold">
              <img
                src="/images/logo.jpg"
                alt="Mountain"
                className="h-8 w-8 mr-2"
              />
              <span className="text-xl font-bold text-white">ImagePro</span>
            </a>
            <nav className="flex space-x-4">
              <a href="http://localhost:5173" className="nav-link">
                Home
              </a>
              <a href="#" className="nav-link">
                Features
              </a>
              <a href="#" className="nav-link">
                Pricing
              </a>
              <a href="http://localhost:5173/imagegallery" className="nav-link">
                Gallery
              </a>
            </nav>
          </header>
        <main className={styles.main}>
          <section className={`${styles.section} ${styles["section-1"]}`}>
            <div className={styles.container}>
              <div className={styles["text-center"]}>
                <h1 className={styles.title}>Welcome to ImagePro</h1>
                <p className={styles.subtitle}>
                  Your one-stop solution for image processing. Enhance your images
                  with our advanced machine learning algorithms.
                </p>
                <a className={styles["cta-link"]} href="http://localhost:5173/image-classification">
                  Get Started
                </a>
                <a className={styles["cta-link"]} href="#">
                  Learn more
                </a>
              </div>
            </div>
          </section>
          <section className={`${styles.section} ${styles["section-2"]}`}>
            <div className={styles.container}>
              <h2 className={styles.title}>Our Main Features</h2>
              <div className={styles["feature-grid"]}>
                <FeatureCard
                  title="Low to High Resolution"
                  description="Transform your low-resolution images into high-resolution masterpieces with our advanced machine learning algorithms.Enhance your visual content by leveraging our cutting-edge machine learning algorithms to seamlessly elevate the resolution of your low-quality images, transforming them into stunning high-resolution masterpieces."
                  imageSrc="/images/lowhighres2.jpg"
                  sectionNumber={1}
                  link="/low-to-high-resolution"
                />
                <FeatureCard
                  title="Image Classification"
                  description="Our AI can classify your images into various categories, making it easier for you to organize and manage your image library."
                  imageSrc="/images/classification.jpg"
                  sectionNumber={2}
                  link="/image-classification"
                />
                {/* <FeatureCard
                  title="Filters and Editing"
                  description="Add the final touches to your images with our wide range of filters and editing tools, all powered by machine learning."
                  imageSrc="/images/filter.jpg"
                  sectionNumber={3}
                  link="/filters-and-editing"
                /> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";

function FeatureCard({ title, description, imageSrc, link, sectionNumber }) {
  const isTextOnLeft = sectionNumber % 2 === 1;

  return (
        <>
    <div className={styles["feature-card"]}>
      <div className={styles["feature-content"]}>
        {isTextOnLeft ? (
          <>
            <div className={styles["text-content"]}>
              <h3 className={styles["feature-title"]}>{title}</h3>
              <p className={styles["feature-description"]}>{description}</p>
              <Link to={link} className={styles["cta-button"]}>
                Open Link
              </Link>
            </div>
            <img
              src={imageSrc}
              alt={title}
              className={styles["feature-image"]}
            />
          </>
        ) : (
          <>
            <img
              src={imageSrc}
              alt={title}
              className={styles["feature-image"]}
            />
            <div className={styles["text-content"]}>
              <h3 className={styles["feature-title"]}>{title}</h3>
              <p className={styles["feature-description"]}>{description}</p>
              <Link to={link} className={styles["cta-button"]}>
                Open Link
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
      <footer className="bg-[#003C47] text-white p-4 text-center fixed bottom-0 w-full">
          <p className="font-bold text-xl w-full ">&copy; 2024 ImagePro. All rights reserved.</p>
        </footer>
        
        </>
  );
}
