import React from 'react'

const CustomInput = ({form,name,label,placeholder,type}) => {
  return (
    <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                  <div className='form-item'>
                    <FormLabel className='form-label'>{label}</FormLabel>
                    <div className="flex w-full flex-col">
                    <FormControl>
                      <Input placeholder={placeholder} {...field} type={type} className='form-label' />
                    </FormControl>
                    <FormMessage className='form-message mt-2'/>
                    </div></div>
                )}
              />

  )
}

export default CustomInput
