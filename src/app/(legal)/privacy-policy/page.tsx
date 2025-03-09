import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white to-slate-50">
        <Container className="relative pb-20 sm:pb-32">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] pb-24 pt-20 text-center">
              <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                Privacy policy
              </h1>
              <p className="mt-4 text-base/7 text-slate-600">
                Last updated on June 4, 2024
              </p>
            </div>
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[40rem]">
              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Types of data collected
              </h2>

              <p className="mb-4 text-sm text-slate-700">
                The owner does not provide a list of Personal Data types
                collected. Complete details on each type of Personal Data
                collected are provided in the dedicated sections of this privacy
                policy or by specific explanation texts displayed prior to the
                Data collection. Personal Data may be freely provided by the
                User, or, in case of Usage Data, collected automatically when
                using this Application. Unless specified otherwise, all Data
                requested by this Application is mandatory and failure to
                provide this Data may make it impossible for this Application to
                provide its services.
              </p>

              <p className="mb-4 text-sm text-slate-700">
                In cases where this Application specifically states that some
                Data is not mandatory, Users are free not to communicate this
                Data without consequences to the availability or the functioning
                of the Service. Users who are uncertain about which Personal
                Data is mandatory are welcome to contact the Owner. Any use of
                Cookies – or of other tracking tools — by this Application or by
                the owners of third-party services used by this Application
                serves the purpose of providing the Service required by the
                User, in addition to any other purposes described in the present
                document. The owner does not share any data collected with
                third-parties. Text messaging opt-in data and consent are not
                shared with any third parties (including subsidiaries and
                affiliates).
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Methods of data processing
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                The Owner takes appropriate security measures to prevent
                unauthorized access, disclosure, modification, or unauthorized
                destruction of the Data. The Data processing is carried out
                using computers and/or IT enabled tools, following
                organizational procedures and modes strictly related to the
                purposes indicated. In addition to the Owner, in some cases, the
                Data may be accessible to certain types of persons in charge,
                involved with the operation of this Application (administration,
                sales, marketing, legal, system administration) or external
                parties (such as third-party technical service providers, mail
                carriers, hosting providers, IT companies, communications
                agencies) appointed, if necessary, as Data Processors by the
                Owner. The updated list of these parties may be requested from
                the Owner at any time.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Place of data processing
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                The Data is processed at the Owner's operating offices and in
                any other places where the parties involved in the processing
                are located. Depending on the User's location, data transfers
                may involve transferring the User's Data to a country other than
                their own. To find out more about the place of processing of
                such transferred Data, Users can check the section containing
                details about the processing of Personal Data.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Data retention
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                Unless specified otherwise in this document, Personal Data shall
                be processed and stored for as long as required by the purpose
                they have been collected for and may be retained for longer due
                to applicable legal obligation or based on the Users’ consent.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                Personal Data collected for purposes related to the performance
                of a contract between the Owner and the User shall be retained
                until such contract has been fully performed. Personal Data
                collected for the purposes of the Owner’s legitimate interests
                shall be retained as long as needed to fulfill such purposes.
                Users may find specific information regarding the legitimate
                interests pursued by the Owner within the relevant sections of
                this document or by contacting the Owner.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                The Owner may be allowed to retain Personal Data for a longer
                period whenever the User has given consent to such processing,
                as long as such consent is not withdrawn. Furthermore, the Owner
                may be obliged to retain Personal Data for a longer period
                whenever required to fulfil a legal obligation or upon order of
                an authority. Once the retention period expires, Personal Data
                shall be deleted. Therefore, the right of access, the right to
                erasure, the right to rectification and the right to data
                portability cannot be enforced after expiration of the retention
                period.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                The purposes of data processing
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                The Data concerning the User is collected to allow the Owner to
                provide its Service, comply with its legal obligations, respond
                to enforcement requests, protect its rights and interests (or
                those of its Users or third parties), detect any malicious or
                fraudulent activity, as well as the following: Registration and
                authentication. For specific information about the Personal Data
                used for each purpose, the User may refer to the section
                "Detailed information on the processing of Personal Data".
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Registration and authentication
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                By registering or authenticating, Users allow this Application
                to identify them and give them access to dedicated services.
                Depending on what is described below, third parties may provide
                registration and authentication services. In this case, this
                Application will be able to access some Data, stored by these
                third-party services, for registration or identification
                purposes.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                Google OAuth is a registration and authentication service
                provided by Google LLC and is connected to the Google network.
                The service processes various types of personal data, as
                specified in its{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  className="font-semibold text-wo-blue"
                >
                  privacy policy
                </a>
                . Data is processed in the United States. According to the
                California Consumer Privacy Act (CCPA), the category of personal
                information collected includes internet or other electronic
                network activity information. This processing constitutes a sale
                in the United States.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Legal basis of processing
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                The Owner may process Personal Data relating to Users if one of
                the following conditions applies: Users have given their consent
                for one or more specific purposes; the provision of data is
                necessary for the performance of an agreement with the User
                and/or for any pre-contractual obligations; processing is
                required for compliance with a legal obligation to which the
                Owner is subject; it is related to a task carried out in the
                public interest or in the exercise of official authority vested
                in the Owner; or it is necessary for the purposes of the
                legitimate interests pursued by the Owner or a third party. In
                any case, the Owner is available to clarify the specific legal
                basis applicable to the processing, including whether the
                provision of Personal Data is a statutory or contractual
                requirement or a necessity for entering into a contract.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                The rights of users
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                Users may exercise certain rights regarding their Data processed
                by the Owner, to the extent permitted by law. They have the
                right to withdraw their consent at any time if they have
                previously given consent to the processing of their Personal
                Data. Users may also object to the processing of their Data if
                it is being processed on a legal basis other than consent.
                Additionally, they have the right to access their Data, learn if
                it is being processed, obtain disclosure regarding certain
                aspects of the processing, and receive a copy of the Data
                undergoing processing.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                Users may verify the accuracy of their Data and request that it
                be updated or corrected. They also have the right to restrict
                the processing of their Data, in which case the Owner will store
                the Data but will not process it for any other purpose.
                Furthermore, Users may request the deletion or removal of their
                Personal Data. They also have the right to receive their Data in
                a structured, commonly used, and machine-readable format and, if
                technically feasible, to have it transferred to another
                controller without any hindrance.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                Additionally, Users may lodge a complaint with their competent
                data protection authority. They are also entitled to information
                about the legal basis for Data transfers abroad, including
                transfers to international organizations governed by public
                international law or established by multiple countries, such as
                the United Nations. The Owner will also provide details on the
                security measures implemented to safeguard User Data.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                Where Personal Data is processed for a public interest, in the
                exercise of an official authority vested in the Owner or for the
                purposes of the legitimate interests pursued by the Owner, Users
                may object to such processing by providing a ground related to
                their particular situation to justify the objection. Users must
                know that, however, should their Personal Data be processed for
                direct marketing purposes, they can object to that processing at
                any time, free of charge and without providing any
                justification. Where the User objects to processing for direct
                marketing purposes, the Personal Data will no longer be
                processed for such purposes. To learn whether the Owner is
                processing Personal Data for direct marketing purposes, Users
                may refer to the relevant sections of this document.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                Any requests to exercise User rights can be directed to the
                Owner through the contact details provided in this document.
                Such requests are free of charge and will be answered by the
                Owner as early as possible and always within one month,
                providing Users with the information required by law. Any
                rectification or erasure of Personal Data or restriction of
                processing will be communicated by the Owner to each recipient,
                if any, to whom the Personal Data has been disclosed unless this
                proves impossible or involves disproportionate effort. At the
                Users’ request, the Owner will inform them about those
                recipients.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Notice at collection
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                This Notice at Collection provides information regarding the
                categories of Personal Information collected or disclosed in the
                past 12 months, enabling you to make informed decisions about
                how your data is used. While these categories are primarily
                based on California privacy laws, they also offer insight into
                the types of Personal Information collected for individuals
                outside of California.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                The Personal Information collected includes internet or other
                electronic network activity information, as specified in the
                service’s privacy policy. This data is processed for purposes
                such as registration and authentication and is retained for the
                duration necessary to fulfill its intended purpose. The
                collected data may be sold or shared but is not used for
                targeted advertising. The third party involved in this
                processing is Google LLC.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                Definitions of relevant terms can be found in the “Definitions
                and Legal References” section of this Privacy Policy. For more
                information on your rights, including how to opt out of certain
                processing activities, please refer to the “Your Privacy Rights
                Under US State Laws” section. Additional details on the
                collection and processing of Personal Information are available
                in the “Detailed Information on the Processing of Personal Data”
                section.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                The Owner does not process Personal Information for purposes
                that are unexpected, unnecessary, or incompatible with the
                originally disclosed purposes without obtaining consent.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Collection of personal information
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                We collect the above-mentioned categories of Personal
                Information, either directly or indirectly, from you when you
                use this Application. For example, you directly provide your
                Personal Information when you submit requests via any forms on
                this Application. You also provide Personal Information
                indirectly when you navigate this Application, as Personal
                Information about you is automatically observed and collected.
                Finally, we may collect your Personal Information from third
                parties that work with us in connection with the Service or with
                the functioning of this Application and features thereof.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Users in the United States
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                This part of the document integrates with and supplements the
                information contained in the rest of the privacy policy and is
                provided by the business running this Application and, if the
                case may be, its parent, subsidiaries and affiliates (for the
                purposes of this section referred to collectively as “we”, “us”,
                “our”). The information contained in this section applies to all
                Users (Users are referred to below, simply as “you”, “your”,
                “yours”), who are residents in the following states: California,
                Virginia, Colorado, Connecticut, Utah, Texas, Oregon and
                Montana. For such Users, this information supersedes any other
                possibly divergent or conflicting provisions contained in the
                privacy policy.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Your privacy rights under United States state laws
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                You may exercise certain rights regarding your Personal
                Information, subject to applicable law. Specifically, you have
                the right to access your Personal Information, also known as the
                right to know. This allows you to request confirmation of
                whether we are processing your Personal Information and to
                access such data. You also have the right to correct inaccurate
                Personal Information by requesting that we update or amend any
                inaccuracies in the data we maintain about you.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                Additionally, you have the right to request the deletion of your
                Personal Information, allowing you to ask for its removal from
                our records. If applicable, you may also obtain a copy of your
                Personal Information in a portable and usable format,
                facilitating its transfer to another entity, provided that such
                a transfer is technically feasible.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                You have the right to opt out of the sale of your Personal
                Information, and we will not discriminate against you for
                exercising your privacy rights. Furthermore, you have the right
                to non-discrimination, ensuring that the exercise of your
                privacy rights does not result in any unfair treatment.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                <strong>Rights for users residing in California.</strong> In
                addition to the rights listed above common to all Users in the
                United States, as a User residing in California, you have the
                right to opt out of the Sharing of your Personal Information for
                cross-context behavioral advertising; The right to request to
                limit our use or disclosure of your Sensitive Personal
                Information to only that which is necessary to perform the
                services or provide the goods, as is reasonably expected by an
                average consumer. Please note that certain exceptions outlined
                in the law may apply, such as, when the collection and
                processing of Sensitive Personal Information is necessary to
                verify or maintain the quality or safety of our service.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                <strong>
                  Rights for users residing in Virginia, Colorado, Connecticut,
                  Texas, Oregon and Montana.
                </strong>{' '}
                In addition to the rights listed above common to all Users in
                the United States, as a User residing in Virginia, Colorado,
                Connecticut, Texas and Oregon, you have The right to opt out of
                the processing of your personal information for Targeted
                Advertising or profiling in furtherance of decisions that
                produce legal or similarly significant effects concerning you;
                The right to freely give, deny or withdraw your consent for the
                processing of your Sensitive Personal Information. Please note
                that certain exceptions outlined in the law may apply, such as,
                but not limited to, when the collection and processing of
                Sensitive Personal Information is necessary for the provision of
                a product or service specifically requested by the consumer.
              </p>

              <p className="mt-4 text-sm text-slate-700">
                <strong>Rights for users residing in Utah.</strong> In addition
                to the rights listed above common to all Users in the United
                States, as a User residing in Utah, you have The right to opt
                out of the processing of your Personal Information for Targeted
                Advertising; The right to opt out of the processing of your
                Sensitive Personal Information. Please note that certain
                exceptions outlined in the law may apply, such as, but not
                limited to, when the collection and processing of Sensitive
                Personal Information is necessary for the provision of a product
                or service specifically requested by the consumer.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                How to exercise these rights
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                To exercise the rights described above, you need to submit your
                request to us by emailing us at{' '}
                <a
                  href="mailto:admin@waveortho.com"
                  className="font-semibold text-wo-blue"
                >
                  admin@waveortho.com
                </a>
                . For us to respond to your request, we must know who you are.
                We will not respond to any request if we are unable to verify
                your identity and therefore confirm the Personal Information in
                our possession relates to you. You are not required to create an
                account with us to submit your request. We will use any Personal
                Information collected from you in connection with the
                verification of your request solely for verification and shall
                not further disclose the Personal Information, retain it longer
                than necessary for purposes of verification, or use it for
                unrelated purposes. If you are an adult, you can make a request
                on behalf of a child under your parental authority.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Legal disclosure
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                The User's Personal Data may be used for legal purposes by the
                Owner in Court or in the stages leading to possible legal action
                arising from improper use of this Application or the related
                Services. The User declares to be aware that the Owner may be
                required to reveal personal data upon request of public
                authorities.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Changes and amendments
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                The Owner reserves the right to make changes to this privacy
                policy at any time by notifying its Users on this page and
                possibly within this Application and/or - as far as technically
                and legally feasible - sending a notice to Users via any contact
                information available to the Owner. It is strongly recommended
                to check this page often, referring to the date of the last
                modification listed at the bottom. Should the changes affect
                processing activities performed on the basis of the User’s
                consent, the Owner shall collect new consent from the User,
                where required.
              </p>

              <h2 className="mb-4 mt-8 font-display text-lg leading-7 text-slate-900">
                Contacting us
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                If you have any questions about this Policy, please contact us
                by email at{' '}
                <a
                  href="mailto:admin@waveortho.com"
                  className="font-semibold text-wo-blue"
                >
                  admin@waveortho.com
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
