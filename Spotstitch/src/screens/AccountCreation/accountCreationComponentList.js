import React from 'react'
import EmailConfirmation from '../../components/AccountCreationComponents/EmailConfirmation'
import TwoFactorAuthentication from '../../components/AccountCreationComponents/TwoFactorAuthentication'
import TwoFactorAuthenticationVerification from '../../components/AccountCreationComponents/TwoFactorAuthenticationVerification'
import CreateBio from '../../components/AccountCreationComponents/CreateBio'
import ConnectSocials from '../../components/AccountCreationComponents/ConnectSocials'
import AddProfilePhoto from '../../components/AccountCreationComponents/AddProfilePhoto'
import AddBannerPhoto from '../../components/AccountCreationComponents/AddBannerPhoto'
import SelectTopics from '../../components/AccountCreationComponents/SelectTopics'
import JoinLayers from '../../components/AccountCreationComponents/JoinLayers'

export const accountCreationComponentList = [
  {
    id: 1,
    component: () => <EmailConfirmation />,
    title: 'Verify your \naccount.',
    subtitle: 'A confirmation email has been sent to ***ndoe@email.com',
  },
  {
    id: 2,
    component: () => <TwoFactorAuthentication />,
    title: 'Improve your \nsecurity.',
    subtitle: 'Activate 2 factor authentication for better account security.',
    information:
      'A sign in code will be sent to your phone number before you can continue.',
    verificationText: 'Your account has been verified.',
  },
  {
    id: 3,
    component: () => <TwoFactorAuthenticationVerification />,
    title: '2FA Activation',
    information:
      'An authentication code has been sent to ***-***-0000 and will expire after 5 minutes.',
    verificationText: '2 Factor Authentication Code Sent',
  },
  {
    id: 4,
    component: () => <CreateBio />,
    title: 'Welcome to \nSpotstitch, John.',
    subtitle: "Let's get to know you.",
  },
  {
    id: 5,
    component: () => <ConnectSocials />,
    title: 'Connect your \nsocial media.',
    subtitle: 'Link your accounts for a immersive experience.',
  },
  {
    id: 6,
    component: () => <AddProfilePhoto />,
    title: 'Add a profile \nphoto.',
    subtitle: 'Show off your unique style.',
  },
  {
    id: 7,
    component: () => <AddBannerPhoto />,
    title: 'Add a banner to \nyour profile.',
    subtitle: 'Personalize your profile page.',
  },
  {
    id: 8,
    component: () => <SelectTopics />,
    title: "Let's get you \nstitched in.",
    subtitle: 'Find your seam. What brings you to Spotstitch?',
    information: 'Select 3 or more.',
  },
  {
    id: 9,
    component: () => <JoinLayers />,
    title: "Let's get you \nstitched in.",
    subtitle: 'Check out these layers!',
    information:
      'Layers are small communities with like-minded people. You can participate in group activities and projects here.',
  },
]
