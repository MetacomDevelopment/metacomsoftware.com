export default {
  name: `settingsSocials`,
  title: `Settings - Social Media Links`,
  type: `document`,
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: `facebook`,
      title: `Socials: Facebook URL`,
      description: `Add the company's Facebook URL.`,
      type: `string`,
      initialValue: `https://facebook.com`,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: `instagram`,
      title: `Socials: Instagram URL`,
      description: `Add the company's Instagram URL.`,
      type: `string`,
      initialValue: `https://instagram.com`,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: `twitter`,
      title: `Socials: Twitter URL`,
      description: `Add the company's Twitter URL.`,
      type: `string`,
      initialValue: `https://twitter.com`,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: `youTube`,
      title: `Socials: YouTube URL`,
      description: `Add the company's YouTube URL.`,
      type: `string`,
      initialValue: `https://youtube.com`,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: `linkedIn`,
      title: `Socials: LinkedIn URL`,
      description: `Add the company's LinkedIn URL.`,
      type: `string`,
      initialValue: `https://linkedin.com`,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: `gmbCid`,
      title: `Socials: GMB CID URL`,
      description: `Add the company's GMB CID URL.`,
      type: `string`,
      initialValue: `https://www.google.com/maps?cid=13760398526388246013`,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: `gmbShare`,
      title: `Socials: GMB Share URL`,
      description: `Add the company's GMB Share URL.`,
      type: `string`,
      initialValue: `https://www.google.com/maps?cid=13760398526388246013`,
      // validation: (Rule) => Rule.required(),
    },
    {
      name: `gmbEmbed`,
      title: `Socials: GMB Embed URL`,
      description: `Add the company's GMB Embed URL.`,
      type: `text`,
      initialValue: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11862.165932860273!2d-70.807675!3d41.9886533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbef6c18dd52e15fd!2sAngels%20Towing%20-%20Junk%20Car%20Mass!5e0!3m2!1sen!2sus!4v1621527104729!5m2!1sen!2sus`,
      // validation: (Rule) => Rule.required(),
    },
  ],
};