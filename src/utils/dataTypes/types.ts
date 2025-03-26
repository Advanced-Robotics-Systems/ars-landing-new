export interface PrivacyPolicyList {
  title: string;
  listItem: string[];
}

export interface PrivacyPolicySubSection {
  title: string;
  subtitle: string;
  content: string[];
}
export interface PrivacyPolicySection {
  title: string;
  list?: PrivacyPolicyList;
  introduction: string[];
  subSections?: PrivacyPolicySubSection[];
}

export interface PrivacyPolicyData {
  title: string;
  sections: PrivacyPolicySection[];
}

// export interface Blog {
//   fields: {
//     title: string;
//     slug: string;
//     category: string;
//     readTime: number;
//     featuredImage: {
//       fields: {
//         file: {
//           url: string;
//           details: {
//             image: {
//               width: number;
//             };
//           };
//         };
//       };
//     };
//     thumbnail: {
//       fields: {
//         file: {
//           url: string;
//         };
//       };
//     };
//     content: {
//       content: unknown[];
//     };
//   };
// }

export interface Blog {
  id: string;
  title: string;
  description: string;
  category: string;
  time: string;
  img: string;
  link: string;
}
