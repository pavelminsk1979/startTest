import React from 'react';
import {Typography} from "./components/myTypography/typography";


function App() {
  return (
    <div >
     <div>
      <Typography variant={'blockOrSectionName'}>blockOrSectionName  </Typography>
      <Typography variant={'titlePrimary'}>titlePrimary произвольный текст</Typography>
      <Typography variant={'titleSecondary'}>titleSecondary произвольный текст</Typography>
      <Typography variant={'headerPrimary'}>headerPrimary произвольный текст</Typography>
      <Typography variant={'headerSecondary'}>headerSecondary произвольный текст</Typography>
      <Typography variant={'subheaderPrimary'}>subheaderPrimary произвольный текст</Typography>
      <Typography variant={'subheaderSecondary'}>subheaderSecondary произвольный текст</Typography>
      <Typography variant={'typefaceMain'}>typefaceMain произвольный текст</Typography>
      <Typography variant={'buttonS'}>buttonS произвольный текст</Typography>
      <Typography variant={'buttonM'}>buttonM произвольный текст</Typography>
      <Typography variant={'buttonL'}>buttonL произвольный текст</Typography>
      <Typography variant={'titleAnyCads'}>titleAnyCads произвольный текст</Typography>
      <Typography variant={'BigLink'}>BigLink произвольный текст</Typography>
      <Typography variant={'statisticsMore1M'}>statisticsMore1M произвольный текст</Typography>
      <Typography variant={'tupefaceMainBold'}>tupefaceMainBold произвольный текст</Typography>
      <Typography variant={'smallText'}>smallText произвольный текст</Typography>
      <Typography variant={'smallLink'}>smallLink произвольный текст</Typography>
      <Typography variant={'titleSideMenu'}>titleSideMenu произвольный текст</Typography>
     </div>
     <Typography as="a" href="https://mail.ru/" target="_blank" variant={'titleSecondary'}>titleSecondary произвольный текст</Typography>
     <Typography as="a" href="https://mail.ru/"  target="_blank" variant={'BigLink'}>BigLink произвольный текст</Typography>
{/*     <div>
   <IncubatorTypography.H1 >Другой какойто произвольный текст</IncubatorTypography.H1>
   <IncubatorTypography.H2 >Другой какойто произвольный текст</IncubatorTypography.H2>
   <IncubatorTypography.H3 >Другой какойто произвольный текст</IncubatorTypography.H3>
   <IncubatorTypography.Subtitle1 >Другой какойто произвольный текст</IncubatorTypography.Subtitle1>
   <IncubatorTypography.Subtitle2 >Другой какойто произвольный текст</IncubatorTypography.Subtitle2>
   <IncubatorTypography.SubtitleLink >Другой какойто произвольный текст</IncubatorTypography.SubtitleLink>
   <IncubatorTypography.Body1 >Другой какойто произвольный текст</IncubatorTypography.Body1>
   <IncubatorTypography.Body2 >Другой какойто произвольный текст</IncubatorTypography.Body2>
   <IncubatorTypography.Overline >Другой какойто произвольный текст</IncubatorTypography.Overline>
   <IncubatorTypography.Caption >Другой какойто произвольный текст</IncubatorTypography.Caption>
   <IncubatorTypography.CaptionBold >Другой какойто произвольный текст</IncubatorTypography.CaptionBold>
   <IncubatorTypography.CaptionLink >Другой какойто произвольный текст</IncubatorTypography.CaptionLink>
   <IncubatorTypography.Link >Другой какойто произвольный текст</IncubatorTypography.Link>
   <IncubatorTypography.Error >Другой какойто произвольный текст</IncubatorTypography.Error>

     </div>*/}
    </div>
  );
}

export default App;
