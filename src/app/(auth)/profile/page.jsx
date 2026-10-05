'use client'

import { updateUser } from '@/lib/auth-client'

import { FloppyDisk } from '@gravity-ui/icons'

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
  toast
} from '@heroui/react'

export default function ProfilePage () {
  const handleUpdateUser = async e => {
    e.preventDefault()

    // Form data collect
    const formData = new FormData(e.currentTarget)

    // FormData → Object
    const userData = Object.fromEntries(formData.entries())

    console.log('in the form data ', userData)

    try {
      // Better Auth দিয়ে user update
      const resData = await updateUser({
        name: userData.name
      })

      console.log('after profile update ', resData)

      // Success toast
      toast.success('Profile updated successfully', {
        description: 'Your profile information has been updated.'
      })
    } catch (error) {
      console.log('Profile update error ', error)

      // Error toast
      toast.danger('Profile update failed', {
        description: 'Something went wrong. Please try again.'
      })
    }
  }

  return (
    <Form
      className='w-full max-w-96'
      onSubmit={handleUpdateUser}
    >
      <Fieldset>
        <Fieldset.Legend>
          Profile Settings
        </Fieldset.Legend>

        <Description>
          Update your profile information.
        </Description>

        <FieldGroup>
          <TextField
            isRequired
            name='name'
            validate={value => {
              if (value.length < 3) {
                return 'Name must be at least 3 characters'
              }

              return null
            }}
          >
            <Label>Name</Label>

            <Input placeholder='John Doe' />

            <FieldError />
          </TextField>
        </FieldGroup>

        <Fieldset.Actions>
          <Button type='submit'>
            <FloppyDisk />
            Save changes
          </Button>

          <Button
            type='reset'
            variant='secondary'
          >
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  )
}
