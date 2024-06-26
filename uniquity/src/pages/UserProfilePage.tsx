import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Rating from '@mui/material/Rating';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { DataStore } from 'aws-amplify';
import { forwardRef, useEffect, useState } from 'react';
import { LazyUserProfile, UserProfile } from '../models';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import profileImage from '../assets/profile.jpg';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserProfilePage() {
  const [userProfile, setUserProfile] = useState<LazyUserProfile>(
    new UserProfile({
      name: '',
      personalityTest: '',
      background: '',
      phone: '',
    }),
  );
  const [textModal, setTextModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [assess, setAssess] = useState<any>();
  // Snack Bar
  const [snackbarOpen, setSnackBarOpen] = useState<boolean>(false);
  useEffect(() => {
    const sub = DataStore.observeQuery(UserProfile).subscribe(({ items }) => {
      if (items && items.length > 0) {
        setUserProfile(items[0]);
        setAssess(JSON.parse(items[0].personalityTest!));
      }
    });
    return () => sub.unsubscribe();
  }, []);

  function handleRating(index: number, newValue: number | null) {
    const nextAssess = assess.map((q: { rating: number }, i: number) => {
      if (i === index) {
        q.rating = newValue || 0;
        return q;
      } else {
        return q;
      }
    });
    setAssess(nextAssess);
    DataStore.save(
      UserProfile.copyOf(userProfile!, d => {
        d.personalityTest = JSON.stringify(assess);
      }),
    );
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        alignContent: 'center',
      }}
    >
      <Dialog
        PaperProps={{ sx: { borderRadius: 6 } }}
        open={textModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setTextModal(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Texting Enabled'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Thank you for signing up for text messaging, you can now text your
            coach! Send a hello to{' '}
            <Link href="tel:1-844-353-8764">1-844-353-8764</Link> and be sure to
            save it in your contacts. If at any point you wish to unsubscribe
            your number simply remove your phone number from your profile, or
            text STOP.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setTextModal(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackBarOpen(false)}
      >
        <Alert
          onClose={() => setSnackBarOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Profile Saved
        </Alert>
      </Snackbar>
      <Box m={2}>
        <Grid mb={5} item xs={12}>
          <img
            width="100%"
            height={200}
            style={{ objectFit: 'cover' }}
            alt="Profile Image"
            src={profileImage}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              fullWidth
              value={userProfile.name}
              onChange={event => {
                setUserProfile(
                  UserProfile.copyOf(userProfile!, draft => {
                    draft.name = event.target.value;
                  }),
                );
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone number"
              fullWidth
              helperText="1231231234"
              value={userProfile.phone}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip
                      title="By Adding your phone number you are opting in to text coaching"
                      placement="top-end"
                    >
                      <InfoOutlined />
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              onChange={event => {
                setUserProfile(
                  UserProfile.copyOf(userProfile!, draft => {
                    draft.phone = event.target.value;
                  }),
                );
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Professional background"
              fullWidth
              multiline
              minRows={10}
              value={userProfile.background}
              onChange={event => {
                setUserProfile(
                  UserProfile.copyOf(userProfile!, draft => {
                    draft.background = event.target.value;
                  }),
                );
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="AI-generated, personal summary to tailor your AI coach"
              fullWidth
              multiline
              minRows={10}
              value={userProfile.userSummary}
              onChange={event => {
                setUserProfile(
                  UserProfile.copyOf(userProfile!, draft => {
                    draft.userSummary = event.target.value;
                  }),
                );
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={async () => {
                if (userProfile.phone) {
                  setTextModal(true);
                }
                await DataStore.save(userProfile!);
                setSnackBarOpen(true);
              }}
              sx={{ float: 'right', width: 80 }}
              variant="contained"
            >
              Save
            </Button>
          </Grid>
          <Grid mb={5} item xs={12}>
            <Typography mt={5} variant="h5">
              What motivates you at work
            </Typography>
            {assess &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              assess.map((q: any, index: any) => (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                    borderBottomStyle: 'solid',
                    borderBottomWidth: 1,
                  }}
                  key={index}
                >
                  <Typography component="legend">{q.question}</Typography>
                  <Rating
                    value={q.rating}
                    onChange={(_event, newValue) =>
                      handleRating(index, newValue)
                    }
                  ></Rating>
                </div>
              ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
