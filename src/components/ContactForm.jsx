import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { countries } from '../data/countries.jsx';
import { getVisasByCountry, visaCategories } from '../data/visas.jsx';

const initialState = {
  name: '',
  phone: '',
  email: '',
  country: '',
  visaType: '',
  message: '',
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const { t, lang } = useLanguage();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const availableVisas = useMemo(() => {
    if (!values.country || values.country === 'none') return [];
    return getVisasByCountry(values.country);
  }, [values.country]);

  const groupedVisas = useMemo(() => {
    return visaCategories
      .map((category) => ({
        category,
        items: availableVisas.filter((v) => v.category === category),
      }))
      .filter((group) => group.items.length > 0);
  }, [availableVisas]);

  const handleChange = (field) => (e) => {
    const { value } = e.target;
    setValues((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'country' ? { visaType: '' } : {}),
    }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = t('contact.formRequired');
    if (!values.phone.trim()) next.phone = t('contact.formRequired');
    if (!values.email.trim()) {
      next.email = t('contact.formRequired');
    } else if (!isValidEmail(values.email)) {
      next.email = t('contact.formEmailInvalid');
    }
    if (!values.country) next.country = t('contact.formRequired');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('success');
      setValues(initialState);
    }, 800);
  };

  if (status === 'success') {
    return (
      <Alert
        severity="success"
        role="status"
        sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'eucalyptus.main', color: 'eucalyptus.dark' }}
      >
        {t('contact.formSuccess')}
      </Alert>
    );
  }

  const countryChosen = Boolean(values.country) && values.country !== 'none';

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1.5,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <TextField
        label={t('contact.formName')}
        id="name"
        value={values.name}
        onChange={handleChange('name')}
        error={Boolean(errors.name)}
        helperText={errors.name}
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
        <TextField
          label={t('contact.formPhone')}
          id="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange('phone')}
          error={Boolean(errors.phone)}
          helperText={errors.phone}
          fullWidth
        />
        <TextField
          label={t('contact.formEmail')}
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
        <TextField
          select
          label={t('contact.formCountry')}
          id="country"
          value={values.country}
          onChange={handleChange('country')}
          error={Boolean(errors.country)}
          helperText={errors.country}
          fullWidth
        >
          <MenuItem value="">{t('contact.formCountryPlaceholder')}</MenuItem>
          {countries.map((country) => (
            <MenuItem key={country.id} value={country.id}>
              {country.flag} {country.name[lang]}
            </MenuItem>
          ))}
          <MenuItem value="none">{t('contact.formCountryNone')}</MenuItem>
        </TextField>

        <TextField
          select
          label={t('contact.formVisaType')}
          id="visaType"
          value={values.visaType}
          onChange={handleChange('visaType')}
          disabled={!countryChosen}
          helperText={countryChosen ? ' ' : t('contact.formVisaHelpNoCountry')}
          fullWidth
        >
          <MenuItem value="">
            {countryChosen ? t('contact.formVisaPlaceholderReady') : t('contact.formVisaPlaceholder')}
          </MenuItem>
          <MenuItem value="none">{t('contact.formVisaNone')}</MenuItem>
          {groupedVisas.flatMap((group) => [
            <ListSubheader key={`${group.category}-header`} sx={{ bgcolor: 'background.paper', fontWeight: 700 }}>
              {t(`visas.categories.${group.category}`)}
            </ListSubheader>,
            ...group.items.map((visa) => (
              <MenuItem key={visa.id} value={visa.id} sx={{ pl: 3 }}>
                {visa.code} — {visa.title[lang]}
              </MenuItem>
            )),
          ])}
        </TextField>
      </Stack>

      <TextField
        label={t('contact.formMessage')}
        id="message"
        value={values.message}
        onChange={handleChange('message')}
        multiline
        rows={5}
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" size="large" disabled={status === 'submitting'}>
        {status === 'submitting' ? t('contact.formSubmitting') : t('contact.formSubmit')}
      </Button>
    </Box>
  );
}
