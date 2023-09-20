import React from 'react';
import {Typography} from "./components/myTypography/typography";
import {AdminMenuMiddle} from "./components/admin-menu-middle/adminMenuMiddle";


function App() {
  return (
    <div >
        <AdminMenuMiddle/>
     <div>
      <Typography colorText='gold'   variant={'blockOrSectionName'}>1BlockOrSectionName  </Typography>
      <Typography  variant={'titlePrimary'}>2TitlePrimary</Typography>
      <Typography variant={'titleSecondary'}>3TitleSecondary</Typography>
      <Typography variant={'headerPrimary'}>4HeaderPrimary</Typography>
      <Typography variant={'headerSecondary'}>5HeaderSecondary </Typography>
      <Typography variant={'subheaderPrimary'}>6SubheaderPrimary </Typography>
      <Typography variant={'subheaderSecondary'}>7SubheaderSecondary </Typography>
      <Typography variant={'typefaceMain'}>8TypefaceMain </Typography>
      <Typography variant={'buttonS'}>9ButtonS </Typography>
      <Typography variant={'buttonM'}>10ButtonM </Typography>
      <Typography variant={'buttonL'}>11ButtonL </Typography>
      <Typography variant={'titleAnyCads'}>12TitleAnyCads </Typography>
      <Typography variant={'BigLink'}>13BigLink </Typography>
      <Typography variant={'statisticsMore1M'}>14StatisticsMore1M </Typography>
      <Typography variant={'tupefaceMainBold'}>15TupefaceMainBold </Typography>
      <Typography variant={'smallText'}>16SmallText </Typography>
      <Typography variant={'smallLink'}>17SmallLink </Typography>
      <Typography variant={'titleSideMenu'}>18TitleSideMenu </Typography>
     </div>
        <div>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2</div>
            <Typography colorText='blue' as="a" href="https://mail.ru/" target="_blank" variant={'titleSecondary'}>titleSecondary ссылка на почту </Typography>
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
