import ArrowButton from '@/app/reusable/ArrowButton'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

function Quote () {
  const [btnHovered, setBtnHovered] = useState(false)
  console.log(`[${new Date().toLocaleTimeString()}] Quote rendered`);
  return (
    <>
      <div className='w-full min-h-dvh p-15 px-60'>
        <h1 className='animate-slide-reveal-bottom text-center text-3xl font-bold py-5'>Request a Quote</h1>
        <form className='py-20'>
          <FieldGroup>
            <FieldSet>
              <div className='grid grid-cols-2 gap-4'>
                <Field className='animate-slide-reveal-bottom'>
                  <FieldLabel htmlFor='name'>Name</FieldLabel>
                  <Input id='name' type='text' autoComplete='off' />
                </Field>
                <Field className='animate-slide-reveal-bottom'>
                  <FieldLabel htmlFor='email'>Email</FieldLabel>
                  <Input id='email' type='email' autoComplete='off' />
                </Field>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <Field className='animate-slide-reveal-bottom'>
                  <FieldLabel htmlFor='phone'>Phone Number</FieldLabel>
                  <Input id='phone' type='text' autoComplete='off' />
                </Field>
                <Field className='animate-slide-reveal-bottom'>
                  <FieldLabel htmlFor='email'>
                    Time Frame<span className='text-destructive'>*</span>
                  </FieldLabel>
                  <Select>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Select a Time Frame' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='week'>1 week</SelectItem>
                        <SelectItem value='month'>1 month</SelectItem>
                        <SelectItem value='months'>3 months</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <Field className='animate-slide-reveal-bottom'>
                  <FieldLabel htmlFor='phone'>Size</FieldLabel>
                  <Select>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Select a Size' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sizes</SelectLabel>
                        <SelectItem value='small'>Small</SelectItem>
                        <SelectItem value='medium'>Medium</SelectItem>
                        <SelectItem value='large'>Large</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field className='animate-slide-reveal-bottom'>
                  <FieldLabel htmlFor='email'>
                    Quality<span className='text-destructive'>*</span>
                  </FieldLabel>
                  <Select required>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Select a Quality' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='good'>Good</SelectItem>
                        <SelectItem value='better'>Better</SelectItem>
                        <SelectItem value='best'>Best</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <Field className='animate-slide-reveal-bottom'>
                <FieldLabel>
                    Please Describe your Project here<span className='text-destructive'>*</span>
                </FieldLabel>
                <Textarea className='w-full h-50'/>
              </Field>
              <Field>
              <div className='animate-reveal-slow text-center'>By submitting this form you agree to our<Button className='underline' type='button' variant={'link'}>Terms of Service</Button> and <Button type='button' className='underline' variant={'link'}>Privacy Policy</Button>.</div>
            </Field>
            <Field>
                <div className='w-fit text-center'>
                  <ArrowButton btnHovered={btnHovered} setBtnHovered={setBtnHovered} placeHolder={'Lorem Ipsum'} varient={'blue'} className='shakyButton' />
                </div>
            </Field>
            </FieldSet>
          </FieldGroup>
        </form>
      </div>
    </>
  )
}

export default Quote
