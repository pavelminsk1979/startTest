import React from 'react';
import {Typography} from "./components/myTypography/typography";
import {IncubatorTypography} from "./components/incubatorTypography/incubatorTypography";

function App() {
  return (
    <div >
     <div>
      <Typography variant={'large'}>Какойто произвольный текст</Typography>
      <Typography variant={'h1'}>Какойто произвольный текст</Typography>
      <Typography variant={'h2'}>Какойто произвольный текст</Typography>
      <Typography variant={'h3'}>Какойто произвольный текст</Typography>
      <Typography variant={'body1'}>Какойто произвольный текст</Typography>
      <Typography variant={'body2'}>Какойто произвольный текст</Typography>
      <Typography variant={'subtitle1'}>Какойто произвольный текст</Typography>
      <Typography variant={'subtitle2'}>Какойто произвольный текст</Typography>
      <Typography variant={'caption'}>Какойто произвольный текст</Typography>
      <Typography variant={'overline'}>Какойто произвольный текст</Typography>
      <Typography variant={'link1'}>Какойто произвольный текст</Typography>
      <Typography variant={'link2'}>Какойто произвольный текст</Typography>
      <Typography variant={'error'}>Какойто произвольный текст</Typography>
     </div>
     <div>
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

     </div>
    </div>
  );
}

export default App;
