import {
  cutTextToLength,
  slugify,
  composeArticleSlug,
  extractArticleIdFromSlug,
} from '../index'

const str = 'The quick brown fox jumps over the lazy dog.'
const str2 = 'Please work Somehow!!!!?'
const str3 = 12314
const str4 = 9921902902
const str5 = '???sfw235!!@ lrg;'
const str6 = 'LIVE--LONG__TIME'
const str7 = '---12123--1234-'

describe('cutTextToLength', () => {
  it('should cut text to length', () => {
    expect(cutTextToLength(str, 20)).toBe('The quick brown fox ...')
  })

  it('should not cut text to length', () => {
    expect(cutTextToLength(str, 100)).toBe(str)
  })
})

describe('slugify', () => {
  it('should replace space to "-" ', () => {
    expect(slugify(str)).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog')
  })

  it('should change', () => {
    console.log(slugify(str2))
    expect(slugify(str2)).toBe('please-work-somehow')
  })
})

describe('composeArticleSlug', () => {
  it('should change', () => {
    expect(composeArticleSlug(str3, str2)).toBe('please-work-somehow-12314')
  })
  it('should change', () => {
    expect(composeArticleSlug(str4, str5)).toBe('sfw235-lrg-9921902902')
  })
})

describe('extractArticleIdFromSlug', () => {
  it('should split (-)', () => {
    expect(extractArticleIdFromSlug(str7)).toBe('')
  })

  it('should split (-)', () => {
    expect(extractArticleIdFromSlug(str6)).toBe('LONG__TIME')
  })
})
