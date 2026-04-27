export type Manager = {
  name: string
  langs: ('ru' | 'kk')[]
  phoneDisplay: string
  phoneIntl: string
}

export const MANAGERS: Manager[] = [
  { name: 'Сабина',  langs: ['ru', 'kk'], phoneDisplay: '+7 775 408 2492', phoneIntl: '+77754082492' },
  { name: 'Юлия',    langs: ['ru'],       phoneDisplay: '+7 707 126 5517', phoneIntl: '+77071265517' },
  { name: 'Надежда', langs: ['ru'],       phoneDisplay: '+7 707 126 5495', phoneIntl: '+77071265495' },
]

export const PRIMARY_MANAGER = MANAGERS[0]

export const ADDRESS_MAPS_URL =
  'https://2gis.kz/search/' +
  encodeURIComponent('Темиртау, проспект Металлургов 33, ТД БУМ')
