const PrivacyAndPolicy = () => {
  return (
    <div className='w-full flex-1'>
      <div className='w-full px-2.5 md:py-24 py-12'>
        <div className='max-w-[1400px] w-full mx-auto space-y-6 md:space-y-8'>
          <div className='py-6 space-y-4 md:space-y-6 text-center'>
            <div className=''>
              <p className='text-cyan-500 font-semibold mb-3 text-sm md:text-lg'>
                Privacy
              </p>
              <h2 className='text-xl md:text-4xl font-semibold text-gray-900'>
                Review Our Privacy Policy
                {/* <!-- --> */}
              </h2>
            </div>
          </div>
          <div className='mx-auto w-full flex items-center justify-center py-4'>
            <div
              className=' justify-between prose overflow-hidden lg:w-3/4 space-y-4'
              style={{ wordBreak: 'break-word' }}
            >
              <p>
                This Privacy Policy outlines how the School collects, uses,
                maintains, and discloses information from users (referred to as
                "Students"). It applies to the School and all its offered
                Courses.
              </p>
              <h2 id='personal-identification-information'>
                <a
                  className='anchor'
                  href='#personal-identification-information'
                >
                  <span className='icon icon-link'></span>
                </a>
                Personal Identification Information
              </h2>
              <p>
                We may collect personal identification information from Students
                through various means, such as when they enroll in the School or
                a Course, subscribe to a newsletter, or participate in other
                activities, services, features, or resources available in the
                School. Students can visit the School anonymously, and we will
                only collect personal identification information if they
                voluntarily provide it. However, refusing to provide this
                information may limit their ability to participate in certain
                School-related activities.
              </p>
              <h2 id='how-we-use-collected-information'>
                <a className='anchor' href='#how-we-use-collected-information'>
                  <span className='icon icon-link'></span>
                </a>
                How We Use Collected Information
              </h2>
              <p>
                The School may collect and use Students’ personal identification
                information for the following purposes:
              </p>
              <ul>
                <li>
                  <strong>To Improve Customer Service:</strong>
                  Information you provide helps us respond to your customer
                  service requests and support needs more efficiently.
                </li>
                <li>
                  <strong>To Personalize User Experience:</strong>
                  We may use information in the aggregate to understand how our
                  Students as a group use the services and resources provided in
                  our School.
                </li>
                <li>
                  <strong>To Send Periodic Emails:</strong>
                  We may use Student email addresses to send Students
                  information and updates pertaining to their order. Student
                  email addresses may also be used to respond to Student
                  inquiries, questions, or other requests.
                </li>
              </ul>
              <h2 id='sharing-your-personal-information'>
                <a className='anchor' href='#sharing-your-personal-information'>
                  <span className='icon icon-link'></span>
                </a>
                Sharing Your Personal Information
              </h2>
              <p>
                We do not sell, trade, or rent Student personal identification
                information to others.
              </p>
              <h2 id='third-party-websites'>
                <a className='anchor' href='#third-party-websites'>
                  <span className='icon icon-link'></span>
                </a>
                Third-Party Websites
              </h2>
              <p>
                Students may encounter advertisements or other content in our
                School that link to websites and services provided by our
                partners, suppliers, advertisers, sponsors, licensors, and other
                third parties. We do not control the content or links on these
                external websites and are not responsible for their practices.
                These websites and services, including their content and links,
                may change frequently and have their own privacy and customer
                service policies. Interacting with any other website, including
                those linked to our School, is governed by the terms and
                policies of that specific website.
              </p>
              <h2 id='changes-to-this-privacy-policy'>
                <a className='anchor' href='#changes-to-this-privacy-policy'>
                  <span className='icon icon-link'></span>
                </a>
                Changes to This Privacy Policy
              </h2>
              <p>
                The School has the discretion to update this Privacy Policy at
                any time. We encourage Students to frequently check this page
                for any changes. You acknowledge and agree that it is your
                responsibility to review this Privacy Policy periodically and
                become aware of modifications.
              </p>
              <h2 id='your-acceptance-of-these-terms'>
                <a className='anchor' href='#your-acceptance-of-these-terms'>
                  <span className='icon icon-link'></span>
                </a>
                Your Acceptance of These Terms
              </h2>
              <p>
                By enrolling in the School, you signify your acceptance of this
                Privacy Policy. If you do not agree to this Privacy Policy,
                please do not enroll in the School. Your continued enrollment in
                the School following the posting of changes to this Privacy
                Policy will be deemed your acceptance of those changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PrivacyAndPolicy
