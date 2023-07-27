import {FC} from "react"
import {Box, Grid, Typography, Divider, Link} from "@mui/material";

export const AccessDenied: FC = () => {
    return( <>
      <Box>
        <Grid sx={{ ml:6}}>
          <Typography sx={{mt: 10}} variant="h4">Page only exclusive for customers.</Typography> 
          <Divider/>
          <Typography sx={{mt: 2}} variant="h6"><Link href="/login">Do you already have an account? Enter here.</Link></Typography>
        </Grid>                 
      </Box>
  </>)
}
